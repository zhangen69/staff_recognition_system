export default interface IResult {
    status: number;
    message: string;
    error?: string;
    data?: any;
    totalItems?: number;
    currentPage?: number;
    totalPages?: number;
}