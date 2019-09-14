import { Router } from 'express';

const router = new Router();

router.get('/foo', ( req, res, next ) => {
	res.json({some:'data'});
});

export default router;