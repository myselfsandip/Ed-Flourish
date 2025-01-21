import mongoose from "mongoose"
import { Course } from "../models/courseModel.js"
// MongoDB connection string (replace with your actual connection string)
// const MONGODB_URI = '';

// Connect to MongoDB
mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err))

// BCA course data
const bcaData = {
    courseType: "College",
    collegeCourseDetails: {
        courseName: "BCA",
        semesters: [
            {
                year: 2,
                semesterNumber: 3,
                subjects: [
                    {
                        name: "Python",
                        code: "PY301",
                        problems: [
                            {
                                module: "M1",
                                notes: "https://drive.google.com/file/d/1YocAZq81fU3HEZyQMdXFaz_HRVwRpgAf/view?usp=sharing",
                                video: "https://youtu.be/DInMru2Eq6E?si=Y6iAZL8yw9MVHHDJ",
                            },
                            {
                                module: "M2",
                                notes: "https://drive.google.com/file/d/1tc-n-8ZJRh1UhmiV3JIWnCRM3N8pEjdN/view?usp=sharing",
                                video: "https://youtu.be/D0BLCFg_JIA?si=ByA2pnv7j6OA_TTT",
                            },
                            {
                                module: "M3",
                                notes: "https://drive.google.com/file/d/1Mo87tkjMSS_Jcpoar5bgTqVWCZViX69c/view?usp=sharing",
                                video: "https://youtu.be/9JdSHcXWHwc?si=KhO2tENTUKB4U3VH",
                            },
                            {
                                module: "M4",
                                notes: "https://drive.google.com/file/d/1AjetX2Yj5MWfly3vCUZ8ldbRhp6P2C_R/view?usp=drive_link",
                                video: "https://youtu.be/_n_op0dmTCY?si=TwI5rJM4cPohvPQ9",
                            },
                            {
                                module: "M5",
                                notes: "https://drive.google.com/file/d/1zTT1avs81Q70MDaZOZHwbG-Di9NS-BX8/view?usp=drive_link",
                                video: "https://youtu.be/u-OmVr_fT4s?si=Nd42Yh8wDh5MdCPl",
                            },
                            {
                                module: "M6",
                                notes: "https://drive.google.com/file/d/17pJQs8l4BPAfZrZniZqkzXN9xfv7HHzO/view?usp=drive_link",
                                video: "https://youtu.be/Eaz5e6M8tL4?si=96oC6VUoHDh6zVE0",
                            },
                            {
                                module: "M7",
                                notes: "https://drive.google.com/file/d/1UGBCcpix3k7f55YKUkjPfvhpjVtiM0FC/view?usp=drive_link",
                                video: "https://youtu.be/zLFituJxj6c?si=rsP4C8BjcyubaUod",
                            },
                            {
                                module: "M8",
                                notes: "https://drive.google.com/file/d/1jYznMSyJNOe3GKONnv9otHHe1-q77psS/view?usp=drive_link",
                                video: "https://youtu.be/j2G68uQtOwM?si=B1CJKuAyiYzdLdUo",
                            },
                            {
                                module: "M9",
                                notes: "https://drive.google.com/file/d/1mtwSRz332V3W22dFsaGveD3X8hDl42HK/view?usp=drive_link",
                                video: "https://youtu.be/4mX0uPQFLDU?si=eH0_LQoWVp4SUn-b",
                            },
                            {
                                module: "M10",
                                notes: "https://drive.google.com/file/d/1I_7Yi-G8eBmePdFBCQUvtod-hiSkAeho/view?usp=drive_link",
                                video: "https://youtu.be/HeW-D6KpDwY?si=tt-1cLyu304nVKv3",
                            },
                        ],
                    },
                ],
            },
            {
                year: 2,
                semesterNumber: 4,
                subjects: [
                    {
                        name: "Operating Systems",
                        code: "OS401",
                        problems: [
                            {
                                module: "M1",
                                notes: "https://drive.google.com/file/d/1Ha5W4u6zUF-rTJ6qYO81Q2103sirMKCK/view?usp=drive_link",
                                video: "https://youtu.be/WJ-UaAaumNA?si=OEteNhwDaBFSfzMo",
                            },
                            {
                                module: "M2",
                                notes: "https://drive.google.com/file/d/1LI5tqKlSt-oIM9Jb1dHguL7Uer8uSRkJ/view?usp=drive_link",
                                video: "https://youtu.be/XXPBl20J22w?si=A4pXlJjGpR9YHyi6",
                            },
                            {
                                module: "M3",
                                notes: "https://drive.google.com/file/d/1XCvs_p3_WEH3QfmsK-tCbdEmA6USUmWW/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLBlnK6fEyqRgKl0MbI6kbI5ffNt7BF8Fn&si=yLXI8m68rQxDs91e",
                            },
                            {
                                module: "M4",
                                notes: "https://drive.google.com/file/d/1Zlo8iFwKfoSq_efnfcz8lA1gMKgX4i2k/view?usp=drive_link",
                                video: "https://youtu.be/rWFH6PLOIEI?si=T7Imau4TzzAujpeV",
                            },
                            {
                                module: "M5",
                                notes: "https://drive.google.com/file/d/1avCztz6ytiwatGrVrVtXwEg9IMeto8X0/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PL8tc66sMn9Kjt2Wf5H9O-TMqZFQukoCQ1&si=0HZA1qU6KFX90Kca",
                            },
                            {
                                module: "M6",
                                notes: "https://drive.google.com/file/d/10Atush8Uv6tDCSdbbubzlSvb0UtcI5ZA/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLySKRj7KSLYgS9jVyonZTFpiYkIzZXF2-&si=HGRGjcxtHYCc5IH9",
                            },
                            {
                                module: "M7",
                                notes: "https://drive.google.com/file/d/1VwgZH9z-1-eVPGeNo0bcDZiewZlV2In0/view?usp=drive_link",
                                video: "https://youtu.be/DKb7KhfoZmU?si=Sv8MJxM8xLj0bjPX",
                            },
                            {
                                module: "M8",
                                notes: "https://drive.google.com/file/d/1LsZMqC82UiuUBQpcAQwROsRDklCcL1s2/view?usp=drive_link",
                                video: "https://youtu.be/NYBKXzl5bWU?si=EDtcXZCtTzGwwAGy",
                            },
                        ],
                    },
                    {
                        name: "Software Engineering",
                        code: "SE401",
                        problems: [
                            {
                                module: "M1",
                                notes: "https://drive.google.com/file/d/18uCt1uzewuDlM5FyTglYPqpoH4Qg6X7j/view?usp=drive_link",
                                video: "https://youtu.be/IHx9ImEMuzQ?si=eojpXPz7-2R0WS7m",
                            },
                            {
                                module: "M2",
                                notes: "https://drive.google.com/file/d/1I6ekfXEy3xv481xviO5pQVGL5SqmFtwe/view?usp=drive_link",
                                video: "https://youtu.be/l-WcAQCiin8?si=L_XQbdekuE9715yK",
                            },
                            {
                                module: "M3",
                                notes: "https://drive.google.com/file/d/1P4exjTcBMAV2vuKhZujdHFHuoKlLxkTF/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLrjkTql3jnm_kpRxNK6la_gHuKQ3WI_dL&si=s5qQVYKdmLLddO8R",
                            },
                            {
                                module: "M4",
                                notes: "https://drive.google.com/file/d/1MwKwyJFjsmyB7yozZVYTBKviKHcjttJR/view?usp=drive_link",
                                video: "https://youtu.be/H6xT6bF4es0?si=m0rJfrPj2kDG6UlK",
                            },
                            {
                                module: "M5",
                                notes: "https://drive.google.com/file/d/14HolDsw79EXv10aAGzugv5-WpYCr0KkN/view?usp=drive_link",
                                video: "https://youtu.be/95nIM9vZSAQ?si=sm6Z5vJKz2qdmd6G",
                            },
                            {
                                module: "M6",
                                notes: "https://drive.google.com/file/d/1n7CJGjZMvFHZarRBo4MmI1C98TAKq68a/view?usp=drive_link",
                                video: "https://youtu.be/dce6oaUHdyM?si=O-6Iew734_mK_gNq",
                            },
                            {
                                module: "M7",
                                notes: "https://drive.google.com/file/d/15oqOxY1i7ju73CfeZ0t4Ur4mO505nljt/view?usp=drive_link",
                                video: "https://youtu.be/T0TynxN77oY?si=4kQQohxf54loi1iR",
                            },
                            {
                                module: "M8",
                                notes: "https://drive.google.com/file/d/1xUivcvfmeExX8Kq7P3NwV-vGgVvIF8di/view?usp=drive_link",
                                video: "https://youtu.be/LNSG-yssisA?si=VIVOkqCTGfURh2ep",
                            },
                            {
                                module: "M9",
                                notes: "https://drive.google.com/file/d/1vSc6ednTOPxm7pTrKOWMKIKVotlBqgLV/view?usp=drive_link",
                                video: "https://youtu.be/Z-pqT1phY5E?si=WUAr_IOgtKT7omne",
                            },
                        ],
                    },
                ],
            },
        ],
    },
}

// Function to insert BCA course data
async function insertBCAData() {
    try {
        const course = new Course(bcaData)
        await course.save()
        console.log("BCA course data inserted successfully")
    } catch (error) {
        console.error("Error inserting BCA course data:", error)
    } finally {
        mongoose.disconnect()
    }
}

insertBCAData()

