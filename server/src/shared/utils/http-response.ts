export function successResponse<T>(data: T, message = "SUCCESS") {
  return {
    data,
    message,
  };
}
