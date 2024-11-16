import cors from 'cors';
import { Express, Request, Response } from 'express';
import express from 'express';
import { signUp, signIn } from './controllers';
import {
    validate,
    authenticationSchema,
    authMiddleware,
    errorHandler
} from './middleware';
import {
    users as usersRouter,
    authUserRouter,
    tokens as tokensRouter,
    wallets as walletsRouter,
    transactions as transactionsRouter,
    authTransRouter,
    faucet as faucetRouter
} from './routers';

export const app: Express = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
    res.send('Sample Server');
});

app.get('/ping', (_req: Request, res: Response) => {
    res.status(200).send('pong');
});
app.post('/signup', validate(authenticationSchema), signUp);
app.post('/signin', validate(authenticationSchema), signIn);
app.use('/users', usersRouter, authUserRouter);
app.use('/tokens', tokensRouter);
app.use('/wallets', authMiddleware, walletsRouter);
app.use('/transactions', transactionsRouter, authTransRouter);
app.use('/faucet', authMiddleware, faucetRouter);
app.use(errorHandler);
