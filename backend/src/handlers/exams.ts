import prisma from "../db";


export const createNewExam = async (req, res, next) => {
	try {
		const exam = await prisma.exam.create({
			data: {
				name: req.body.name,
				description: req.body.description,
			},
		});
		console.log('NEW EXAM', exam)
		res.json({ exam });
	} catch (err) {
		next(err)
	}
};

export const getExam = async (req, res, next) => {
	try {
		const exam = await prisma.exam.findUnique({
			where: {
				id: Number(req.params.id),
			},
		});
		res.json({ exam });
	} catch (err) {
		next(err)
	}
};

	export const getAllExams = async (req, res, next) => {
		console.log('GET ALL--')
		try {
			const exam = await prisma.exam.findMany();
			res.json({ exam });
		} catch (err) {
			next(err)
		}
	};

export const updateExam = async (req, res, next) => {
	try {
		const exam = await prisma.exam.update({
			where: {
				id: Number(req.params.id),
			},
			data: {
				name: req.body.name,
				description: req.body.description,
			},
		});
		res.json({ exam });
	} catch (err) {
		next(err)
	}
};

export const deleteExam = async (req, res, next) => {
	try {
		const exam = await prisma.exam.delete({
			where: {
				id: Number(req.params.id),
			},
		});
		res.json({ exam });
	} catch (err) {
		next(err)
	}
};
