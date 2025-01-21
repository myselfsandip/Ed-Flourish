import mongoose from "mongoose"
import { Course } from "../models/courseModel.js"



// MongoDB connection string (replace with your actual connection string)
// const MONGODB_URI = '';

// Connect to MongoDB
mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err))

// BCA course data (college-based)
const bcaData = {
    courseType: "College",
    collegeCourseDetails: {
        courseName: "BCA",
        semesters: [
            {
                year: 1,
                semesterNumber: 1,
                subjects: [
                    {
                        name: "Digital Electronics",
                        code: "DE101",
                        problems: [
                            {
                                module: "M1",
                                notes: "https://drive.google.com/file/d/1ltf1DGeX4KntIMQO_gvKYxO6bY8mDnpt/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLxCzCOWd7aiFOet6KEEqDff1aXEGLdUzn&si=CKYtII1WBvjqwuRx",
                            },
                            {
                                module: "M2",
                                notes: "https://drive.google.com/file/d/1OtTcHCjWM4XarwHSBE2LHCawzfPdGv8A/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLwjK_iyK4LLBC_so3odA64E2MLgIRKafl&si=bCtAyI1glrwVmYzb",
                            },
                            {
                                module: "M3",
                                notes: "https://drive.google.com/file/d/1D3eswoM79oH_IBTTktwgr2S_H2fCcdt0/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLgwJf8NK-2e4sAMptCE4kYRqoWhIvk2cm&si=oU1hGrwJg1AJZAx2",
                            },
                            {
                                module: "M4",
                                notes: "https://drive.google.com/file/d/1rqG9GVvm47DQ_hxJ756KbcFPHiT0YJqK/view?usp=drive_link",
                                video: "https://www.youtube.com/live/8Ze5dmQDi90?si=3GIvvI6H4yp-Y44Q",
                            },
                            {
                                module: "M5",
                                notes: "https://drive.google.com/file/d/1u4uN1gJlcWf-lUJPSNBzavwl0ql4TsDV/view?usp=drive_link",
                                video: "https://youtu.be/w2hK0JVKmJc?si=9xza3L-xNlKqYJRR",
                            },
                            {
                                module: "M6",
                                notes: "https://drive.google.com/file/d/1EkRMOiQQciaOnaUm0XDTKd6dAIC8yHuJ/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLW0F47OesfFOtD6cF57B5fJ62rTSI7kW3&si=GLklRcgsPcbz9ujw",
                            },
                            {
                                module: "M7",
                                notes: "https://drive.google.com/file/d/16Ih389Di7G8537zBRkl252eMYEvUKJ-6/view?usp=drive_link",
                                video: "https://www.youtube.com/live/CSqNVEsKgaE?si=043pSesrM-KYbDYy",
                            },
                            {
                                module: "M8",
                                notes: "https://drive.google.com/file/d/10VZstTW8XOacFIykaMh6THa3kysOEweB/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLAXUYU7PbJhjeQI3nHewsuxJC8qxbCarn&si=FB0WXEoFknacQYer",
                            },
                            {
                                module: "M9",
                                notes: "https://drive.google.com/file/d/1UGUnWvNGdR0rmBj4NFg7gF1C26qyBc3B/view?usp=drive_link",
                                video: "https://youtu.be/Mxfsl5dhsyo?si=FSnGdKkrLClOrvrv",
                            },
                            {
                                module: "M10",
                                notes: "https://drive.google.com/file/d/11DtJNGtEaDq8pglAYLe5_3nWLSbZaUx4/view?usp=drive_link",
                                video: "https://youtu.be/NjMX4hohyRI?si=uU9m6ObsD0K_ShPr",
                            },
                        ],
                    },
                    {
                        name: "C Programming",
                        code: "CP101",
                        problems: [
                            {
                                module: "M1",
                                notes: "https://drive.google.com/file/d/1rL0g0ggGHPIZWXbJEMTO0ZZguGrIaPf3/view?usp=drive_link",
                                video: "https://youtu.be/KH_1MCgAgnM?si=8sA1aEIpCFmjxdaq",
                            },
                            {
                                module: "M2",
                                notes: "https://drive.google.com/file/d/13-IMSHjEyK84UQ5dCLsMovraXOrlBo0o/view?usp=drive_link",
                                video: "https://youtu.be/C5GCFEMcIGQ?si=ykuDArFwjB8sMJLG",
                            },
                            {
                                module: "M3",
                                notes: "https://drive.google.com/file/d/1KspFsqziSaJnaqKCxl3OA_83evp44BJ4/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLBlnK6fEyqRgZq4a-SMViZr-V8jlvCioJ&si=p4faWMetel67TJ5p",
                            },
                            {
                                module: "M4",
                                notes: "https://drive.google.com/file/d/1W7eUjf_s14Pv1mEcjqknS1RqBBwTyreT/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLcFL7FQZfCUmC9JJV-aeL4IxdBiH1pPdl&si=nsCpTUS6a4evy9YC",
                            },
                            {
                                module: "M5",
                                notes: "https://drive.google.com/file/d/1U7qsi1YmsDtjrvUT7x4E03kGs9ZbKI3l/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLg3N7SjMQZzRdy7jE2Bt9QLij8vZZ22Fu&si=eCIkAnl8bpIYFcLA",
                            },
                            {
                                module: "M6",
                                notes: "https://drive.google.com/file/d/1npS71lQisOO9od4WLd2zqkgME4oHB633/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLcFL7FQZfCUkcQr79saQ0--Rf81NFT_W3&si=ji98vK-iSquay-fi",
                            },
                            {
                                module: "M7",
                                notes: "https://drive.google.com/file/d/1Wel2NQFgyLE1lAADveME7uHNcLZ6sUrv/view?usp=drive_link",
                                video: "https://youtu.be/-cycQu5Pz7o?si=enlZa_7XOTyOc8nD",
                            },
                            {
                                module: "M8",
                                notes: "https://drive.google.com/file/d/1uEXpU6nAkGEq-QVWSiH8MpjCiMteh2Bw/view?usp=drive_link",
                                video: "https://youtu.be/ZIe_j8xAkU4?si=_JNmvqDUN6eIy6_m",
                            },
                        ],
                    },
                ],
            },
            {
                year: 1,
                semesterNumber: 2,
                subjects: [
                    {
                        name: "Computer Architecture",
                        code: "CA201",
                        problems: [
                            {
                                module: "M1",
                                notes: "https://drive.google.com/file/d/1JG-wAlX8TVXb2BSodhW4uJp3nIzIhpos/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLqDOZBROa65A97EBSxYbs2swcIyd6Za6l&si=cuKR_DjN56f5zf-W",
                            },
                            {
                                module: "M2",
                                notes: "https://drive.google.com/file/d/1HHPzKz08dG2wLUPrx4Z8OAWzruoDzy7k/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLwnniLWMUEkh2RkMjUoEI9oGLCxaS_Yjn&si=mqyUyGn5Ro4yhl0d",
                            },
                            {
                                module: "M3",
                                notes: "https://drive.google.com/file/d/1K4DQhbg3BTMquSCmEe7TJo8sFV41mudO/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLs4M3yE4SKQ_bLyZASMKMWw7nBDwk1ACs&si=cCD4Ax8qUKBtLVwD",
                            },
                            {
                                module: "M4",
                                notes: "https://drive.google.com/file/d/1r8tRqR1kCxWNonwlZ5RnEW60OnVjP6Xe/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX&si=0QcKTLRPZGt9SdDk",
                            },
                            {
                                module: "M5",
                                notes: "https://drive.google.com/file/d/18O2s6IEfoblrKy7R24noui0OsM0ql0hN/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLs4M3yE4SKQ95AUA-CSCLzTUsTtDllMK5&si=pNpiZ0takOmCqE0K",
                            },
                            {
                                module: "M6",
                                notes: "https://drive.google.com/file/d/1IO9NEOU0jHq99ILiEAL3rp4G9aE5WqxN/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLs4M3yE4SKQ9uyvLJblPJu9ocjN10A6vP&si=JHdbiETbk6jQrmd8",
                            },
                            {
                                module: "M7",
                                notes: "https://drive.google.com/file/d/18mjidWDgaAO_o9oojhOqQPbf_eJIzLPr/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLAXUYU7PbJhj8Cz_LZkZpEYSu5ITZakBo&si=23Q8mrAbsuQiiMcm",
                            },
                            {
                                module: "M8",
                                notes: "https://drive.google.com/file/d/15GS15QR_pfJ0TuvOUzAgu5QmllXWneK8/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLgwJf8NK-2e476PGksxDe8plqrBQBjX8w&si=qqBT5KxPgSiv7-ft",
                            },
                            {
                                module: "M9",
                                notes: "https://drive.google.com/file/d/17dPuJ-qdWR-ct8As6UDgUVw5NzC-3bOK/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PL3R9-um41JszyaKeoc9qP8Bn45XzqJycj&si=fbIRi5bXlPGTjtWy",
                            },
                        ],
                    },
                    {
                        name: "Basic Web Design",
                        code: "BWD201",
                        problems: [
                            {
                                module: "M1",
                                notes: "https://drive.google.com/file/d/1PXFrJwBdAMJ5sdzjaKPOeOSD2KXcd1lF/view?usp=drive_link",
                                video: "https://youtu.be/M7LBvsdhCuI?si=kJH_fNfJojhe1jQB",
                            },
                            {
                                module: "M2",
                                notes: "https://drive.google.com/file/d/1rRlkNgxejT5H9_n9N1lfQ3vzhbZZWUhy/view?usp=drive_link",
                                video: "https://youtu.be/HcOc7P5BMi4?si=xp21GARfiLJaPUgW",
                            },
                            {
                                module: "M3",
                                notes: "https://drive.google.com/file/d/12QyC_OMakxzxNjffO_xcKZ7AEbb-wj8X/view?usp=drive_link",
                                video: "https://youtu.be/ESnrn1kAD4E?si=YKF2eY648VAWDYR_",
                            },
                            {
                                module: "M4",
                                notes: "https://drive.google.com/file/d/165WGQCGIxO8FoDk-wvb9obklWKfpeJHH/view?usp=drive_link",
                                video: "https://youtu.be/cysnPS0vqi8?si=70w-qhUJMV9dQo5x",
                            },
                            {
                                module: "M5",
                                notes: "https://drive.google.com/file/d/16URg7jJvffk9yFdq5lmiR8bGvqFt5RPA/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&si=f4ZLTZYww8hBMjIW",
                            },
                            {
                                module: "M6",
                                notes: "https://drive.google.com/file/d/1bA6R_p0_D5GfHQrZdI_GQUMuudMF0auC/view?usp=drive_link",
                                video: "https://youtube.com/playlist?list=PLXwTOG3-tRwhSflVauUp4K8JGIZa2OR_2&si=LLouqQUjZAA40LPp",
                            },
                        ],
                    },
                ],
            },
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

// Java course data (skill-based)
const javaData = {
    courseType: "Skill",
    skillBasedCourseDetails: {
        courseName: "Java Programming",
        subjects: [
            {
                name: "Java Fundamentals",
                code: "JAVA101",
                problems: [
                    {
                        module: "M1",
                        notes: "https://drive.google.com/file/d/1nhc6_YWpBJh4_MwC4IV9GLlwG-1R9vAf/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q",
                    },
                    {
                        module: "M2",
                        notes: "https://drive.google.com/file/d/1zjQF-q7ElnVV0iO1IrOCZmg31gX_56tW/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q",
                    },
                    {
                        module: "M3",
                        notes: "https://drive.google.com/file/d/1jKgGeqdQiV5DZjIH2_Ldxix2a3jN3NOf/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q",
                    },
                    {
                        module: "M4",
                        notes: "https://drive.google.com/file/d/15PyOlcGcGpyGzPqzDWS6CPfsXju0ecGg/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q",
                    },
                    {
                        module: "M5",
                        notes: "https://drive.google.com/file/d/1RglOkHGWbuxqUdjAKeMrBR123RQy7AAQ/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q",
                    },
                    {
                        module: "M6",
                        notes: "https://drive.google.com/file/d/1FnGGoespm8v4ETRf7-Fwc8Z60r_WEkYT/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q",
                    },
                    {
                        module: "M7",
                        notes: "https://drive.google.com/file/d/1twkezSY71oomTK8oFa9RfBcPAOX8IHtx/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q",
                    },
                    {
                        module: "M8",
                        notes: "https://drive.google.com/file/d/1xGSrxOGRT4aZSC3FD1G1PxDmlByuD80h/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q",
                    },
                    {
                        module: "M9",
                        notes: "https://drive.google.com/file/d/1Vq6MsQT4E2uOJAiIohU_tcvcbC3IqXjy/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q",
                    },
                    {
                        module: "M10",
                        notes: "https://drive.google.com/file/d/18HggalFIlX_IFhvsJ8npxW0VShbjMJL7/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q",
                    },
                    {
                        module: "M11",
                        notes: "https://drive.google.com/file/d/1Pmrfu1XOUs3cPW1r2jEV6rVpGB1MEJ5L/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q",
                    },
                    {
                        module: "M12",
                        notes: "https://drive.google.com/file/d/14dhX30y-tMJzG1Ds6VeOCen6CA6RDXfR/view?usp=sharing",
                        video: "https://www.youtubecom/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q",
                    },
                    {
                        module: "M13",
                        notes: "https://drive.google.com/file/d/1eHHmdYxEzJYMuPk984KWyk7oqdasqHxY/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q",
                    },
                    {
                        module: "M14",
                        notes: "https://drive.google.com/file/d/1B-4Lv04l81wvoXHYGt0bq-q4XI6NANVX/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6",
                    },
                ],
            },
        ],
    },
}

// DBMS course data (skill-based)
const dbmsData = {
    courseType: "Skill",
    skillBasedCourseDetails: {
        courseName: "Database Management Systems",
        subjects: [
            {
                name: "DBMS Fundamentals",
                code: "DBMS101",
                problems: [
                    {
                        module: "M1",
                        notes: "https://drive.google.com/file/d/1B3GsJioQNmtU5xidwDavXAFgVWb7FJVk/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=T7AxM7Vqvaw&list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc",
                    },
                    {
                        module: "M2",
                        notes: "https://drive.google.com/file/d/1JVCJrAzIfDlHlG30tlkJJiPRer5nNKmm/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=T7AxM7Vqvaw&list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc",
                    },
                    {
                        module: "M3",
                        notes: "https://drive.google.com/file/d/1VHNl5uk8nqWxfLSBnCMaQcpMrApFezPH/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=T7AxM7Vqvaw&list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc",
                    },
                    {
                        module: "M4",
                        notes: "https://drive.google.com/file/d/1SdHRH82enPjY8G5r9cbLfi1n-iF1m_ra/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=T7AxM7Vqvaw&list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc",
                    },
                    {
                        module: "M5",
                        notes: "https://drive.google.com/file/d/1XbrssAhYprvcs4R1a848fI7h2-h6O8WQ/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=T7AxM7Vqvaw&list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc",
                    },
                    {
                        module: "M6",
                        notes: "https://drive.google.com/file/d/117Cd4UZyYEpx1fejNKMAcMhkqSwDeaHp/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=T7AxM7Vqvaw&list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc",
                    },
                    {
                        module: "M7",
                        notes: "https://drive.google.com/file/d/1GmVXN0sl4vwo39d_Z72GGuK1CDThW3aB/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=T7AxM7Vqvaw&list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc",
                    },
                    {
                        module: "M8",
                        notes: "https://drive.google.com/file/d/13kHXtez5O-oGrMFEB6GA5xfxYOPlkL1u/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=T7AxM7Vqvaw&list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc",
                    },
                    {
                        module: "M9",
                        notes: "https://drive.google.com/file/d/10LBxFQ_cO-_1t5_WJlueKw5Q_jNnAsAk/view?usp=sharing",
                        video: "https://www.youtube.com/watch?v=T7AxM7Vqvaw&list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc",
                    },
                ],
            },
        ],
    },
}

// Function to insert course data
async function insertCourseData(courseData) {
    try {
        const course = new Course(courseData)
        await course.save()
        console.log(`${courseData.courseType} course data inserted successfully`)
    } catch (error) {
        console.error(`Error inserting ${courseData.courseType} course data:`, error)
    }
}

// Run the insertion functions
async function insertAllCourseData() {
    try {
        // await insertCourseData(bcaData)
        await insertCourseData(javaData)
        await insertCourseData(dbmsData)
        console.log("All course data inserted successfully")
    } catch (error) {
        console.error("Error inserting course data:", error)
    } finally {
        mongoose.disconnect()
    }
}

// Execute the main function
insertAllCourseData()

