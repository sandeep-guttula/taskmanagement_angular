export interface Todo {
    project_id: number;
    todo_id: number;
    todo_name: string;
    start_date: string;
    end_date: string;
    status: string;
}

export interface Project {
    project_id: number;
    project_name: string;
}
