
import { PixelEventParams } from '../types';

/**
 * Fires the Purchase event to Meta Pixel.
 * @param value The value of the purchase (optional)
 * @param currency The currency of the purchase (optional, defaults to BRL)
 */
export const trackPurchase = (value?: number, currency: string = 'BRL') => {
  if (typeof window !== 'undefined' && window.fbq) {
    const params: PixelEventParams = {};
    if (value !== undefined) {
      params.value = value;
      params.currency = currency;
    }
    
    window.fbq('track', 'Purchase', params);
    console.debug('Meta Pixel: Purchase event fired.');
  } else {
    console.warn('Meta Pixel (fbq) not found on window.');
  }
};
