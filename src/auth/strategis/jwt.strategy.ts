// src/auth/jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

const cookieExtractor = (req: any) => {
  if (!req || !req.cookies) return null;
  return req.cookies['jwt'] || null;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: cookieExtractor,
      ignoreExpiration: false,
      secretOrKeyProvider: (request, rawJwtToken, done) =>
        done(null, process.env.JWT_SECRET || 'minha_secret_da_application'),
    });
  }

  async validate(payload: any) {
    if (!payload?.sub) throw new UnauthorizedException();
    return { id: payload.sub, email: payload.email, name: payload.name };
  }
}