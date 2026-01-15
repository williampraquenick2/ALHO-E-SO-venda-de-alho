
export interface PixelEventParams {
  content_name?: string;
  value?: number;
  currency?: string;
}

declare global {
  interface Window {
    fbq: (
      type: string,
      event: string,
      params?: PixelEventParams
    ) => void;
  }
}
