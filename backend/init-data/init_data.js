import mongoose from 'mongoose';
import { Course } from '../models/courseModel.js';
// MongoDB connection string (replace with your actual connection string)
// const MONGODB_URI = ;

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// BCA course data
const bcaData = {
    courseType: 'College',
    collegeCourseDetails: {
        courseName: 'BCA',
        semesters: [
            {
                year: 1,
                semesterNumber: 1,
                subjects: [
                    {
                        name: 'Digital Electronics',
                        code: 'DE101',
                        problems: [
                            {
                                module: 'M1',
                                notes: 'https://drive.google.com/file/d/1ltf1DGeX4KntIMQO_gvKYxO6bY8mDnpt/view?usp=drive_link',
                                video: 'https://youtube.com/playlist?list=PLxCzCOWd7aiFOet6KEEqDff1aXEGLdUzn&si=CKYtII1WBvjqwuRx'
                            },
                            {
                                module: 'M2',
                                notes: 'https://drive.google.com/file/d/1OtTcHCjWM4XarwHSBE2LHCawzfPdGv8A/view?usp=drive_link',
                                video: 'https://youtube.com/playlist?list=PLwjK_iyK4LLBC_so3odA64E2MLgIRKafl&si=bCtAyI1glrwVmYzb'
                            },
                            {
                                module: 'M3',
                                notes: 'https://drive.google.com/file/d/1D3eswoM79oH_IBTTktwgr2S_H2fCcdt0/view?usp=drive_link',
                                video: 'https://youtube.com/playlist?list=PLgwJf8NK-2e4sAMptCE4kYRqoWhIvk2cm&si=oU1hGrwJg1AJZAx2'
                            },
                            {
                                module: 'M4',
                                notes: 'https://drive.google.com/file/d/1rqG9GVvm47DQ_hxJ756KbcFPHiT0YJqK/view?usp=drive_link',
                                video: 'https://www.youtube.com/live/8Ze5dmQDi90?si=3GIvvI6H4yp-Y44Q'
                            },
                            {
                                module: 'M5',
                                notes: 'https://drive.google.com/file/d/1u4uN1gJlcWf-lUJPSNBzavwl0ql4TsDV/view?usp=drive_link',
                                video: 'https://youtu.be/w2hK0JVKmJc?si=9xza3L-xNlKqYJRR'
                            },
                            {
                                module: 'M6',
                                notes: 'https://drive.google.com/file/d/1EkRMOiQQciaOnaUm0XDTKd6dAIC8yHuJ/view?usp=drive_link',
                                video: 'https://youtube.com/playlist?list=PLW0F47OesfFOtD6cF57B5fJ62rTSI7kW3&si=GLklRcgsPcbz9ujw'
                            },
                            {
                                module: 'M7',
                                notes: 'https://drive.google.com/file/d/16Ih389Di7G8537zBRkl252eMYEvUKJ-6/view?usp=drive_link',
                                video: 'https://www.youtube.com/live/CSqNVEsKgaE?si=043pSesrM-KYbDYy'
                            },
                            {
                                module: 'M8',
                                notes: 'https://drive.google.com/file/d/10VZstTW8XOacFIykaMh6THa3kysOEweB/view?usp=drive_link',
                                video: 'https://youtube.com/playlist?list=PLAXUYU7PbJhjeQI3nHewsuxJC8qxbCarn&si=FB0WXEoFknacQYer'
                            },
                            {
                                module: 'M9',
                                notes: 'https://drive.google.com/file/d/1UGUnWvNGdR0rmBj4NFg7gF1C26qyBc3B/view?usp=drive_link',
                                video: 'https://youtu.be/Mxfsl5dhsyo?si=FSnGdKkrLClOrvrv'
                            },
                            {
                                module: 'M10',
                                notes: 'https://drive.google.com/file/d/11DtJNGtEaDq8pglAYLe5_3nWLSbZaUx4/view?usp=drive_link',
                                video: 'https://youtu.be/NjMX4hohyRI?si=uU9m6ObsD0K_ShPr'
                            }
                        ]
                    },
                    {
                        name: 'C Programming',
                        code: 'CP101',
                        problems: [
                            {
                                module: 'M1',
                                notes: 'https://drive.google.com/file/d/1rL0g0ggGHPIZWXbJEMTO0ZZguGrIaPf3/view?usp=drive_link',
                                video: 'https://youtu.be/KH_1MCgAgnM?si=8sA1aEIpCFmjxdaq'
                            },
                            {
                                module: 'M2',
                                notes: 'https://drive.google.com/file/d/13-IMSHjEyK84UQ5dCLsMovraXOrlBo0o/view?usp=drive_link',
                                video: 'https://youtu.be/C5GCFEMcIGQ?si=ykuDArFwjB8sMJLG'
                            },
                            {
                                module: 'M3',
                                notes: 'https://drive.google.com/file/d/1KspFsqziSaJnaqKCxl3OA_83evp44BJ4/view?usp=drive_link',
                                video: 'https://youtube.com/playlist?list=PLBlnK6fEyqRgZq4a-SMViZr-V8jlvCioJ&si=p4faWMetel67TJ5p'
                            },
                            {
                                module: 'M4',
                                notes: 'https://drive.google.com/file/d/1W7eUjf_s14Pv1mEcjqknS1RqBBwTyreT/view?usp=drive_link',
                                video: 'https://youtube.com/playlist?list=PLcFL7FQZfCUmC9JJV-aeL4IxdBiH1pPdl&si=nsCpTUS6a4evy9YC'
                            },
                            {
                                module: 'M5',
                                notes: 'https://drive.google.com/file/d/1U7qsi1YmsDtjrvUT7x4E03kGs9ZbKI3l/view?usp=drive_link',
                                video: 'https://youtube.com/playlist?list=PLg3N7SjMQZzRdy7jE2Bt9QLij8vZZ22Fu&si=eCIkAnl8bpIYFcLA'
                            },
                            {
                                module: 'M6',
                                notes: 'https://drive.google.com/file/d/1npS71lQisOO9od4WLd2zqkgME4oHB633/view?usp=drive_link',
                                video: 'https://youtube.com/playlist?list=PLcFL7FQZfCUkcQr79saQ0--Rf81NFT_W3&si=ji98vK-iSquay-fi'
                            },
                            {
                                module: 'M7',
                                notes: 'https://drive.google.com/file/d/1Wel2NQFgyLE1lAADveME7uHNcLZ6sUrv/view?usp=drive_link',
                                video: 'https://youtu.be/-cycQu5Pz7o?si=enlZa_7XOTyOc8nD'
                            },
                            {
                                module: 'M8',
                                notes: 'https://drive.google.com/file/d/1uEXpU6nAkGEq-QVWSiH8MpjCiMteh2Bw/view?usp=drive_link',
                                video: 'https://youtu.be/ZIe_j8xAkU4?si=_JNmvqDUN6eIy6_m'
                            }
                        ]
                    }
                ]
            },
            {
                year: 1,
                semesterNumber: 2,
                subjects: [
                    {
                        name: 'Computer Architecture',
                        code: 'CA201',
                        problems: [
                            {
                                module: 'M1',
                                notes: 'https://drive.google.com/file/d/1JG-wAlX8TVXb2BSodhW4uJp3nIzIhpos/view?usp=drive_link',
                                video: 'https://youtube.com/playlist?list=PLqDOZBROa65A97EBSxYbs2swcIyd6Za6l&si=cuKR_DjN56f5zf-W'
                            },
                            {
                                module: 'M2',
                                notes: 'https://drive.google.com/file/d/1HHPzKz08dG2wLUPrx4Z8OAWzruoDzy7k/view?usp=drive_link',
                                video: 'https://youtube.com/playlist?list=PLwnniLWMUEkh2RkMjUoEI9oGLCxaS_Yjn&si=mqyUyGn5Ro4yhl0d'
                            },
                            {
                                module: 'M3',
                                notes: 'https://drive.google.com/file/d/1K4DQhbg3BTMquSCmEe7TJo8sFV41mudO/view?usp=drive_link',
                                video: 'https://youtube.com/playlist?list=PLs4M3yE4SKQ_bLyZASMKMWw7nBDwk1ACs&si=cCD4Ax8qUKBtLVwD'
                            },
                            {
                                module: 'M4',
                                notes: 'https://drive.google.com/file/d/1r8tRqR1kCxWNonwlZ5RnEW60OnVjP6Xe/view?usp=drive_link',
                                video: 'https://youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX&si=0QcKTLRPZGt9SdDk'
                            },
                            {
                                module: 'M5',
                                notes: 'https://drive.google.com/file/d/18O2s6IEfoblrKy7R24noui0OsM0ql0hN/view?usp=drive_link',
                                video: 'https://youtube.com/playlist?list=PLs4M3yE4SKQ95AUA-CSCLzTUsTtDllMK5&si=pNpiZ0takOmCqE0K'
                            },
                            {
                                module: 'M6',
                                notes: 'https://drive.google.com/file/d/1IO9NEOU0jHq99ILiEAL3rp4G9aE5WqxN/view?usp=drive_link',
                                video: 'https://youtube.com/playlist?list=PLs4M3yE4SKQ9uyvLJblPJu9ocjN10A6vP&si=JHdbiETbk6jQrmd8'
                            },
                            {
                                module: 'M7',
                                notes: 'https://drive.google.com/file/d/18mjidWDgaAO_o9oojhOqQPbf_eJIzLPr/view?usp=drive_link',
                                video: 'https://youtube.com/playlist?list=PLAXUYU7PbJhj8Cz_LZkZpEYSu5ITZakBo&si=23Q8mrAbsuQiiMcm'
                            },
                            {
                                module: 'M8',
                                notes: 'https://drive.google.com/file/d/15GS15QR_pfJ0TuvOUzAgu5QmllXWneK8/view?usp=drive_link',
                                video: 'https://youtube.com/playlist?list=PLgwJf8NK-2e476PGksxDe8plqrBQBjX8w&si=qqBT5KxPgSiv7-ft'
                            },
                            {
                                module: 'M9',
                                notes: 'https://drive.google.com/file/d/17dPuJ-qdWR-ct8As6UDgUVw5NzC-3bOK/view?usp=drive_link',
                                video: 'https://youtube.com/playlist?list=PL3R9-um41JszyaKeoc9qP8Bn45XzqJycj&si=fbIRi5bXlPGTjtWy'
                            }
                        ]
                    },
                    {
                        name: 'Basic Web Design',
                        code: 'BWD201',
                        problems: [
                            {
                                module: 'M1',
                                notes: 'https://drive.google.com/file/d/1PXFrJwBdAMJ5sdzjaKPOeOSD2KXcd1lF/view?usp=drive_link',
                                video: 'https://youtu.be/M7LBvsdhCuI?si=kJH_fNfJojhe1jQB'
                            },
                            {
                                module: 'M2',
                                notes: 'https://drive.google.com/file/d/1rRlkNgxejT5H9_n9N1lfQ3vzhbZZWUhy/view?usp=drive_link',
                                video: 'https://youtu.be/HcOc7P5BMi4?si=xp21GARfiLJaPUgW'
                            },
                            {
                                module: 'M3',
                                notes: 'https://drive.google.com/file/d/12QyC_OMakxzxNjffO_xcKZ7AEbb-wj8X/view?usp=drive_link',
                                video: 'https://youtu.be/ESnrn1kAD4E?si=YKF2eY648VAWDYR_'
                            },
                            {
                                module: 'M4',
                                notes: 'https://drive.google.com/file/d/165WGQCGIxO8FoDk-wvb9obklWKfpeJHH/view?usp=drive_link',
                                video: 'https://youtu.be/cysnPS0vqi8?si=70w-qhUJMV9dQo5x'
                            },
                            {
                                module: 'M5',
                                notes: 'https://drive.google.com/file/d/16URg7jJvffk9yFdq5lmiR8bGvqFt5RPA/view?usp=drive_link',
                                video: 'https://youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&si=f4ZLTZYww8hBMjIW'
                            },
                            {
                                module: 'M6',
                                notes: 'https://drive.google.com/file/d/1bA6R_p0_D5GfHQrZdI_GQUMuudMF0auC/view?usp=drive_link',
                                video: 'https://youtube.com/playlist?list=PLXwTOG3-tRwhSflVauUp4K8JGIZa2OR_2&si=LLouqQUjZAA40LPp'
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

// Function to insert BCA course data
async function insertBCAData() {
    try {
        const course = new Course(bcaData);
        await course.save();
        console.log('BCA course data inserted successfully');
    } catch (error) {
        console.error('Error inserting BCA course data:', error);
    } finally {
        mongoose.disconnect();
    }
}

// Run the insertion function
insertBCAData();