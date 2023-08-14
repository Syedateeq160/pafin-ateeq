import { Request, Response } from "express"
import userdb from "../database/database"

export const onGetAllUserdb = async (req: Request, res: Response) => {
	try {
		const allUserdb = await userdb.query("SELECT * FROM Userdb")
		res.status(200).json(allUserdb.rows)
	} catch (err) {
		console.error(`Error in getting Userdb: ${err}`)
	}
}
export const onCreateNewTodo = async (req: Request, res: Response) => {
	if (!req.body.desc) return res.status(400).json("Task description is required!")
	const { desc } = req.body
	try {
		const newTodo = await userdb.query("INSERT INTO Userdb (description) VALUES($1) RETURNING *", [
			desc,
		])
		res.status(200).json(newTodo.rows[0])
	} catch (err) {
		console.error(`Error in creating a new todo: ${err}`)
	}
}
export const onGetTodoById = async (req: Request, res: Response) => {
	if (!req.params.id) return res.status(400).json("Todo ID is required!")
	const { id } = req.params
	try {
		const oneToDo = await userdb.query("SELECT * FROM Userdb WHERE _id = $1", [id])
		res.status(200).json(oneToDo.rows[0])
	} catch (err) {
		console.error(`Error in getting Userdb: ${err}`)
	}
}
export const onUpdateTodoById = async (req: Request, res: Response) => {
	if (!req.params.id) return res.status(400).json("Todo ID is required!")
	const { id } = req.params
	const { desc } = req.body
	try {
		await userdb.query("UPDATE Userdb SET description = $1 WHERE _id = $2", [desc, id])
		res.status(200).json("Updated!")
	} catch (err) {
		console.error(`Error in getting Userdb: ${err}`)
	}
}
export const onDeleteTodoById = async (req: Request, res: Response) => {
	if (!req.params.id) return res.status(400).json("Todo ID is required!")
	const { id } = req.params
	try {
		await userdb.query("DELETE FROM Userdb WHERE _id = $1", [id])
		res.status(200).json("Todo item deleted")
	} catch (err) {
		console.error(`Error in getting Userdb: ${err}`)
	}
}