import { Router } from "express";
import { TaskData } from "../models/db.js";

const tastRoutes = Router();

tastRoutes.get('/', (req, res) => {
    res.send('hii')

});

tastRoutes.post('/add', async (req, res) => {
    const body = req.body;
    const { title, description, priority } = body;
    try {

        const newData = new TaskData({
            title: title,
            description: description,
            priority: priority
        });

        await newData.save();

        console.log('sussfully uploaded!');
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        res.status(500).json({ message: "Internal Error" })
    }
});

tastRoutes.get('/view', async (req, res) => {

    try {

        const data = await TaskData.find();

        console.log(data);
        res.status(200).json({ message: "data", data: data })

    } catch (error) {
        res.status(500).json({ message: "Internal Error" })
    }

});


tastRoutes.put('/edit/:id', async (req, res) => {

    const id = req.params.id;
    const body = req.body;
    const { title, description, priority, status } = body;

    try {

        const available = await TaskData.findOne({ _id: id });

        if (!available) {
            return res.status(401).json({ message: "Not a valid id" })
        }

        const result = await TaskData.updateOne(
            { _id: id },
            {
                $set: {
                    title: title,
                    description: description,
                    priority: priority,
                    status: status
                }
            }
        );

        if (result.matchedCount === 0) {
            return res.status(400).json({ message: 'Course could not be updated' });
        } else {
            console.log(result);
            return res.status(200).json({ message: 'Course updated successfully', result });
        }


    } catch (error) {
        res.status(500).json({ message: "Internal Error" })
    }

})

tastRoutes.patch('/status/:id', async (req, res) => {

    const id = req.params.id;
    const body = req.body;
    const { status } = body;

    try {

        const available = await TaskData.findOne({ _id: id });

        if (!available) {
            return res.status(401).json({ message: "Not a valid id" })
        }

        const result = await TaskData.updateOne(
            { _id: id },
            {
                $set: {
                    status: status
                }
            }
        );

        if (result.matchedCount === 0) {
            return res.status(400).json({ message: 'Course could not be updated' });
        } else {
            console.log(result);
            return res.status(200).json({ message: 'Course updated successfully', result });
        }


    } catch (error) {
        res.status(500).json({ message: "Internal Error" })
    }

})

tastRoutes.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const available = await TaskData.findOne({ _id: id });

        if (!available) {
            return res.status(401).json({ message: "Not a valid id" })
        }
        const result = await TaskData.deleteOne({ _id: id });
        console.log(result);
        res.status(200).json({ message: "Delete Successfully" })

    } catch (error) {
        res.status(500).json({ message: "Internal Error" })
    }
})




export { tastRoutes }