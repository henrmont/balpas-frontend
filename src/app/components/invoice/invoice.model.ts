export interface Invoice {
    id?: number,
    user?: string,
    value?: number | null,
    dueDate?: string,
    pdf?: any,
  }