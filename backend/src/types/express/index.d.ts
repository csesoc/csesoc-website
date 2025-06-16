import "express";

declare module "express-serve-static-core" {
  interface Request {
    rawBody?: Buffer;
  }

  interface IncomingMessage {
    rawBody?: Buffer;
  }
}
