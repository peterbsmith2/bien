export async function delay(duration: number): Promise<any> {
  return new Promise (resolve => setTimeout(resolve, duration))
}