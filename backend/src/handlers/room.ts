import prisma from "../db";

export const createRoom = async (req, res, next) => {
	try {
		const room = await prisma.room.create({
			data: {
				name: req.body.name,
				capacity: req.body.capacity,
			},
		});

		res.json({ room });
	} catch (err) {
		next(err)
	}
};

export const getRoom = async (req, res, next) => {
	try {
		const room = await prisma.room.findUnique({
			where: {
				id: Number(req.params.id),
			},
		});
		res.json({ room });
	} catch (err) {
		next(err)
	}
};

export const getAllRooms = async (req, res, next) => {
	try {
		const room = await prisma.room.findMany();
		res.json({ room });
	} catch (err) {
		next(err)
	}
};

export const updateRoom = async (req, res, next) => {
	try {
		const room = await prisma.room.update({
			where: {
				id: Number(req.params.id),
			},
			data: {
				name: req.body.name,
				capacity: req.body.capacity,
			},
		});
		res.json({ room });
	} catch (err) {
		next(err)
	}
};

export const deleteRoom = async (req, res, next) => {
	try {
		const room = await prisma.room.delete({
			where: {
				id: Number(req.params.id),
			},
		});
		res.json({ room });
	} catch (err) {
		next(err)
	}
};
