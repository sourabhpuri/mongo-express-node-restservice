
import { Router, Response } from "express";
import HttpStatusCodes from "http-status-codes";
import Request from "../../types/Request";
import Student from "../../models/Student";
const router: Router = Router();
// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
router.post("/", async (req: Request, res: Response) => {
  const { name, age } = req.body;
  try {
    const student = new Student({ name, age });
    await student.save();
    res.status(HttpStatusCodes.OK).json(student);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});
router.get("/", async (req: Request, res: Response) => {
  try {
   const result = await Student.find({});
    res.status(HttpStatusCodes.OK).json(result);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});
router.get("/:age", async (req: Request, res: Response) => {
  try {
    const age = req.params.age;
   const result = await Student.find({age:parseInt(age)});
    res.status(HttpStatusCodes.OK).json(result);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});
router.delete("/", async (req: Request, res: Response) => {
  try {
    const { age } = req.body;
     const result= await Student.findOneAndDelete({age})
     res.status(HttpStatusCodes.OK).json(result);
    
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});
router.put("/", async (req: Request, res: Response) => {
  try {
    const { age } = req.body;
     const result= await Student.findOneAndUpdate({age},{age:30})
     res.status(HttpStatusCodes.OK).json(result);
    
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});

export default router;
