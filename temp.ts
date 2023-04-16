
type RawActivity = {
    children: string[]
    id: string
    name: string
    expand: {
        children?: RawActivity[]
    }
}

type Activity = {
    children: Activity[]
    id: string
    name: string
}

type Recording = {
    activity: Activity
    start: number
    end: number
}

type RawRecording = {
    activity: string
    start: number
    end: number
    expand: {
        activity: RawActivity
    }
}

const rawActivity: RawActivity = {
    "children": [
        "xicl190roia7srp",
        "epmvu0rz2fgqt0m"
    ],
    "expand": {
        "children": [
            {
                "children": [],
                "id": "xicl190roia7srp",
                "name": "School",
                "expand": {}
            },
            {
                "children": [
                    "i832own286nyvdf",
                    "mlpdtu6w4xs52qo"
                ],
                "expand": {
                    "children": [
                        {
                            "children": [],
                            "id": "i832own286nyvdf",
                            "name": "Project 1",
                            "expand": {}
                        },
                        {
                            "children": [],
                            "id": "mlpdtu6w4xs52qo",
                            "name": "Project 2",
                            "expand": {}
                        }
                    ]
                },
                "id": "epmvu0rz2fgqt0m",
                "name": "Projects",
            }
        ]
    },
    "id": "fbd3d89mw1cxa6c",
    "name": "Study",
}

const activity: Activity = {
    "children": [
        {
            "children": [],
            "id": "xicl190roia7srp",
            "name": "School"
        },
        {
            "children": [
                {
                    "children": [],
                    "id": "i832own286nyvdf",
                    "name": "Project 1",
                },
                {
                    "children": [],
                    "id": "mlpdtu6w4xs52qo",
                    "name": "Project 2",
                }
            ],
            "id": "epmvu0rz2fgqt0m",
            "name": "Projects",
        }
    ],
    "id": "fbd3d89mw1cxa6c",
    "name": "Study",
}

const rawRecording: RawRecording = {
    "activity": "fbd3d89mw1cxa6c",
    "start": 1610000000,
    "end": 1620000000,
    "expand": { "activity": rawActivity }
}

const recording: Recording = {
    "activity": activity,
    "start": 1610000000,
    "end": 1620000000,
}

// email: new ComplexSchema(42, RegExp(/^[0-9a-z_.\-+]+@(gmail|yahoo|outlook)\.com$/), 'example@gmail.com', 'valid Gmail, Yahoo, or Outlook email address'),

// export function formDataToObject(formData: FormData) {
//     const object: {[k: string]: FormDataEntryValue} = {}
//     for (const [key, value] of formData.entries()) {
//         object[key] = value
//     }
//     return object
// }