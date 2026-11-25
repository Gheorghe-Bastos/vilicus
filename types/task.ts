export type Task = {
    id: string
    taskTitle: string
    taskDescription?: string
    taskLabel?: string
    taskProgress?: string
    taskStartDate?: Date
    taskDeadline?: Date
    taskCountdown?: number
}