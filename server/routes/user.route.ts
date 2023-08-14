import { Router } from "express"
import {
	onGetAllusers,
	onCreateNewuser,
	onGetuserById,
	onUpdateuserById,
	onDeleteuserById,
} from "../controllers/user.controller"

const router = Router()

router.get("/all", onGetAllusers)
router.post("/new", onCreateNewuser)
router.get("/user/:id", onGetuserById)
router.put("/update/:id", onUpdateuserById)
router.delete("/delete/:id", onDeleteuserById)

module.exports = router