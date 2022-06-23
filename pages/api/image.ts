import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

const filePath = path.resolve('.', 'public/assets/images/MSHOW_05_AUMONE.webp');
const imageBuffer = fs.readFileSync(filePath);

export default function image(req: NextApiRequest,
	res: NextApiResponse) {
	res.setHeader('Content-Type', 'image/jpg');
	res.send(imageBuffer);
}

