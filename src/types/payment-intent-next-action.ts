import {
  External$PaymentIntentNextActionAlipayHandleRedirect,
  PaymentIntentNextActionAlipayHandleRedirect,
  Schemas$PaymentIntentNextActionAlipayHandleRedirect,
} from "./payment-intent-next-action-alipay-handle-redirect";
import {
  External$PaymentIntentNextActionBoleto,
  PaymentIntentNextActionBoleto,
  Schemas$PaymentIntentNextActionBoleto,
} from "./payment-intent-next-action-boleto";
import {
  External$PaymentIntentNextActionCardAwaitNotification,
  PaymentIntentNextActionCardAwaitNotification,
  Schemas$PaymentIntentNextActionCardAwaitNotification,
} from "./payment-intent-next-action-card-await-notification";
import {
  External$PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode,
  PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode,
  Schemas$PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode,
} from "./payment-intent-next-action-cashapp-handle-redirect-or-display-qr-code";
import {
  External$PaymentIntentNextActionDisplayBankTransferInstructions,
  PaymentIntentNextActionDisplayBankTransferInstructions,
  Schemas$PaymentIntentNextActionDisplayBankTransferInstructions,
} from "./payment-intent-next-action-display-bank-transfer-instructions";
import {
  External$PaymentIntentNextActionDisplayMultibancoDetails,
  PaymentIntentNextActionDisplayMultibancoDetails,
  Schemas$PaymentIntentNextActionDisplayMultibancoDetails,
} from "./payment-intent-next-action-display-multibanco-details";
import {
  External$PaymentIntentNextActionDisplayOxxoDetails,
  PaymentIntentNextActionDisplayOxxoDetails,
  Schemas$PaymentIntentNextActionDisplayOxxoDetails,
} from "./payment-intent-next-action-display-oxxo-details";
import {
  External$PaymentIntentNextActionKonbini,
  PaymentIntentNextActionKonbini,
  Schemas$PaymentIntentNextActionKonbini,
} from "./payment-intent-next-action-konbini";
import {
  External$PaymentIntentNextActionPaynowDisplayQrCode,
  PaymentIntentNextActionPaynowDisplayQrCode,
  Schemas$PaymentIntentNextActionPaynowDisplayQrCode,
} from "./payment-intent-next-action-paynow-display-qr-code";
import {
  External$PaymentIntentNextActionPixDisplayQrCode,
  PaymentIntentNextActionPixDisplayQrCode,
  Schemas$PaymentIntentNextActionPixDisplayQrCode,
} from "./payment-intent-next-action-pix-display-qr-code";
import {
  External$PaymentIntentNextActionPromptpayDisplayQrCode,
  PaymentIntentNextActionPromptpayDisplayQrCode,
  Schemas$PaymentIntentNextActionPromptpayDisplayQrCode,
} from "./payment-intent-next-action-promptpay-display-qr-code";
import {
  External$PaymentIntentNextActionRedirectToUrl,
  PaymentIntentNextActionRedirectToUrl,
  Schemas$PaymentIntentNextActionRedirectToUrl,
} from "./payment-intent-next-action-redirect-to-url";
import {
  External$PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode,
  PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode,
  Schemas$PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode,
} from "./payment-intent-next-action-swish-handle-redirect-or-display-qr-code";
import {
  External$PaymentIntentNextActionVerifyWithMicrodeposits,
  PaymentIntentNextActionVerifyWithMicrodeposits,
  Schemas$PaymentIntentNextActionVerifyWithMicrodeposits,
} from "./payment-intent-next-action-verify-with-microdeposits";
import {
  External$PaymentIntentNextActionWechatPayDisplayQrCode,
  PaymentIntentNextActionWechatPayDisplayQrCode,
  Schemas$PaymentIntentNextActionWechatPayDisplayQrCode,
} from "./payment-intent-next-action-wechat-pay-display-qr-code";
import {
  External$PaymentIntentNextActionWechatPayRedirectToAndroidApp,
  PaymentIntentNextActionWechatPayRedirectToAndroidApp,
  Schemas$PaymentIntentNextActionWechatPayRedirectToAndroidApp,
} from "./payment-intent-next-action-wechat-pay-redirect-to-android-app";
import {
  External$PaymentIntentNextActionWechatPayRedirectToIosApp,
  PaymentIntentNextActionWechatPayRedirectToIosApp,
  Schemas$PaymentIntentNextActionWechatPayRedirectToIosApp,
} from "./payment-intent-next-action-wechat-pay-redirect-to-ios-app";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextAction = {
  alipayHandleRedirect?:
    | PaymentIntentNextActionAlipayHandleRedirect
    | undefined;
  boletoDisplayDetails?: PaymentIntentNextActionBoleto | undefined;
  cardAwaitNotification?:
    | PaymentIntentNextActionCardAwaitNotification
    | undefined;
  cashappHandleRedirectOrDisplayQrCode?:
    | PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode
    | undefined;
  displayBankTransferInstructions?:
    | PaymentIntentNextActionDisplayBankTransferInstructions
    | undefined;
  konbiniDisplayDetails?: PaymentIntentNextActionKonbini | undefined;
  multibancoDisplayDetails?:
    | PaymentIntentNextActionDisplayMultibancoDetails
    | undefined;
  oxxoDisplayDetails?: PaymentIntentNextActionDisplayOxxoDetails | undefined;
  paynowDisplayQrCode?: PaymentIntentNextActionPaynowDisplayQrCode | undefined;
  pixDisplayQrCode?: PaymentIntentNextActionPixDisplayQrCode | undefined;
  promptpayDisplayQrCode?:
    | PaymentIntentNextActionPromptpayDisplayQrCode
    | undefined;
  redirectToUrl?: PaymentIntentNextActionRedirectToUrl | undefined;
  swishHandleRedirectOrDisplayQrCode?:
    | PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode
    | undefined;
  /**
   * Type of the next action to perform, one of `redirect_to_url`, `use_stripe_sdk`, `alipay_handle_redirect`, `oxxo_display_details`, or `verify_with_microdeposits`.
   */
  type: string;
  /**
   * When confirming a PaymentIntent with Stripe.js, Stripe.js depends on the contents of this dictionary to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by Stripe.js.
   */
  useStripeSdk?: Record<string, any> | undefined;
  verifyWithMicrodeposits?:
    | PaymentIntentNextActionVerifyWithMicrodeposits
    | undefined;
  wechatPayDisplayQrCode?:
    | PaymentIntentNextActionWechatPayDisplayQrCode
    | undefined;
  wechatPayRedirectToAndroidApp?:
    | PaymentIntentNextActionWechatPayRedirectToAndroidApp
    | undefined;
  wechatPayRedirectToIosApp?:
    | PaymentIntentNextActionWechatPayRedirectToIosApp
    | undefined;
};

/**
 * @internal
 * PaymentIntentNextAction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextAction = {
  alipay_handle_redirect?:
    | External$PaymentIntentNextActionAlipayHandleRedirect
    | undefined;
  boleto_display_details?: External$PaymentIntentNextActionBoleto | undefined;
  card_await_notification?:
    | External$PaymentIntentNextActionCardAwaitNotification
    | undefined;
  cashapp_handle_redirect_or_display_qr_code?:
    | External$PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode
    | undefined;
  display_bank_transfer_instructions?:
    | External$PaymentIntentNextActionDisplayBankTransferInstructions
    | undefined;
  konbini_display_details?: External$PaymentIntentNextActionKonbini | undefined;
  multibanco_display_details?:
    | External$PaymentIntentNextActionDisplayMultibancoDetails
    | undefined;
  oxxo_display_details?:
    | External$PaymentIntentNextActionDisplayOxxoDetails
    | undefined;
  paynow_display_qr_code?:
    | External$PaymentIntentNextActionPaynowDisplayQrCode
    | undefined;
  pix_display_qr_code?:
    | External$PaymentIntentNextActionPixDisplayQrCode
    | undefined;
  promptpay_display_qr_code?:
    | External$PaymentIntentNextActionPromptpayDisplayQrCode
    | undefined;
  redirect_to_url?: External$PaymentIntentNextActionRedirectToUrl | undefined;
  swish_handle_redirect_or_display_qr_code?:
    | External$PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode
    | undefined;
  type: string;
  use_stripe_sdk?: Record<string, any> | undefined;
  verify_with_microdeposits?:
    | External$PaymentIntentNextActionVerifyWithMicrodeposits
    | undefined;
  wechat_pay_display_qr_code?:
    | External$PaymentIntentNextActionWechatPayDisplayQrCode
    | undefined;
  wechat_pay_redirect_to_android_app?:
    | External$PaymentIntentNextActionWechatPayRedirectToAndroidApp
    | undefined;
  wechat_pay_redirect_to_ios_app?:
    | External$PaymentIntentNextActionWechatPayRedirectToIosApp
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextAction
 */
const SchemaIn$PaymentIntentNextAction: z.ZodType<
  PaymentIntentNextAction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    alipay_handle_redirect:
      Schemas$PaymentIntentNextActionAlipayHandleRedirect.in.optional(),
    boleto_display_details: Schemas$PaymentIntentNextActionBoleto.in.optional(),
    card_await_notification:
      Schemas$PaymentIntentNextActionCardAwaitNotification.in.optional(),
    cashapp_handle_redirect_or_display_qr_code:
      Schemas$PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode.in.optional(),
    display_bank_transfer_instructions:
      Schemas$PaymentIntentNextActionDisplayBankTransferInstructions.in.optional(),
    konbini_display_details:
      Schemas$PaymentIntentNextActionKonbini.in.optional(),
    multibanco_display_details:
      Schemas$PaymentIntentNextActionDisplayMultibancoDetails.in.optional(),
    oxxo_display_details:
      Schemas$PaymentIntentNextActionDisplayOxxoDetails.in.optional(),
    paynow_display_qr_code:
      Schemas$PaymentIntentNextActionPaynowDisplayQrCode.in.optional(),
    pix_display_qr_code:
      Schemas$PaymentIntentNextActionPixDisplayQrCode.in.optional(),
    promptpay_display_qr_code:
      Schemas$PaymentIntentNextActionPromptpayDisplayQrCode.in.optional(),
    redirect_to_url: Schemas$PaymentIntentNextActionRedirectToUrl.in.optional(),
    swish_handle_redirect_or_display_qr_code:
      Schemas$PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode.in.optional(),
    type: z.string(),
    use_stripe_sdk: z.record(z.string(), z.any()).optional(),
    verify_with_microdeposits:
      Schemas$PaymentIntentNextActionVerifyWithMicrodeposits.in.optional(),
    wechat_pay_display_qr_code:
      Schemas$PaymentIntentNextActionWechatPayDisplayQrCode.in.optional(),
    wechat_pay_redirect_to_android_app:
      Schemas$PaymentIntentNextActionWechatPayRedirectToAndroidApp.in.optional(),
    wechat_pay_redirect_to_ios_app:
      Schemas$PaymentIntentNextActionWechatPayRedirectToIosApp.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alipay_handle_redirect: "alipayHandleRedirect",
      boleto_display_details: "boletoDisplayDetails",
      card_await_notification: "cardAwaitNotification",
      cashapp_handle_redirect_or_display_qr_code:
        "cashappHandleRedirectOrDisplayQrCode",
      display_bank_transfer_instructions: "displayBankTransferInstructions",
      konbini_display_details: "konbiniDisplayDetails",
      multibanco_display_details: "multibancoDisplayDetails",
      oxxo_display_details: "oxxoDisplayDetails",
      paynow_display_qr_code: "paynowDisplayQrCode",
      pix_display_qr_code: "pixDisplayQrCode",
      promptpay_display_qr_code: "promptpayDisplayQrCode",
      redirect_to_url: "redirectToUrl",
      swish_handle_redirect_or_display_qr_code:
        "swishHandleRedirectOrDisplayQrCode",
      type: "type",
      use_stripe_sdk: "useStripeSdk",
      verify_with_microdeposits: "verifyWithMicrodeposits",
      wechat_pay_display_qr_code: "wechatPayDisplayQrCode",
      wechat_pay_redirect_to_android_app: "wechatPayRedirectToAndroidApp",
      wechat_pay_redirect_to_ios_app: "wechatPayRedirectToIosApp",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextAction
 */
const SchemaOut$PaymentIntentNextAction: z.ZodType<
  External$PaymentIntentNextAction, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextAction // the object to be transformed
> = z
  .object({
    alipayHandleRedirect:
      Schemas$PaymentIntentNextActionAlipayHandleRedirect.out.optional(),
    boletoDisplayDetails: Schemas$PaymentIntentNextActionBoleto.out.optional(),
    cardAwaitNotification:
      Schemas$PaymentIntentNextActionCardAwaitNotification.out.optional(),
    cashappHandleRedirectOrDisplayQrCode:
      Schemas$PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode.out.optional(),
    displayBankTransferInstructions:
      Schemas$PaymentIntentNextActionDisplayBankTransferInstructions.out.optional(),
    konbiniDisplayDetails:
      Schemas$PaymentIntentNextActionKonbini.out.optional(),
    multibancoDisplayDetails:
      Schemas$PaymentIntentNextActionDisplayMultibancoDetails.out.optional(),
    oxxoDisplayDetails:
      Schemas$PaymentIntentNextActionDisplayOxxoDetails.out.optional(),
    paynowDisplayQrCode:
      Schemas$PaymentIntentNextActionPaynowDisplayQrCode.out.optional(),
    pixDisplayQrCode:
      Schemas$PaymentIntentNextActionPixDisplayQrCode.out.optional(),
    promptpayDisplayQrCode:
      Schemas$PaymentIntentNextActionPromptpayDisplayQrCode.out.optional(),
    redirectToUrl: Schemas$PaymentIntentNextActionRedirectToUrl.out.optional(),
    swishHandleRedirectOrDisplayQrCode:
      Schemas$PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode.out.optional(),
    type: z.string(),
    useStripeSdk: z.record(z.string(), z.any()).optional(),
    verifyWithMicrodeposits:
      Schemas$PaymentIntentNextActionVerifyWithMicrodeposits.out.optional(),
    wechatPayDisplayQrCode:
      Schemas$PaymentIntentNextActionWechatPayDisplayQrCode.out.optional(),
    wechatPayRedirectToAndroidApp:
      Schemas$PaymentIntentNextActionWechatPayRedirectToAndroidApp.out.optional(),
    wechatPayRedirectToIosApp:
      Schemas$PaymentIntentNextActionWechatPayRedirectToIosApp.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alipayHandleRedirect: "alipay_handle_redirect",
      boletoDisplayDetails: "boleto_display_details",
      cardAwaitNotification: "card_await_notification",
      cashappHandleRedirectOrDisplayQrCode:
        "cashapp_handle_redirect_or_display_qr_code",
      displayBankTransferInstructions: "display_bank_transfer_instructions",
      konbiniDisplayDetails: "konbini_display_details",
      multibancoDisplayDetails: "multibanco_display_details",
      oxxoDisplayDetails: "oxxo_display_details",
      paynowDisplayQrCode: "paynow_display_qr_code",
      pixDisplayQrCode: "pix_display_qr_code",
      promptpayDisplayQrCode: "promptpay_display_qr_code",
      redirectToUrl: "redirect_to_url",
      swishHandleRedirectOrDisplayQrCode:
        "swish_handle_redirect_or_display_qr_code",
      type: "type",
      useStripeSdk: "use_stripe_sdk",
      verifyWithMicrodeposits: "verify_with_microdeposits",
      wechatPayDisplayQrCode: "wechat_pay_display_qr_code",
      wechatPayRedirectToAndroidApp: "wechat_pay_redirect_to_android_app",
      wechatPayRedirectToIosApp: "wechat_pay_redirect_to_ios_app",
    });
  });

export const Schemas$PaymentIntentNextAction = {
  in: SchemaIn$PaymentIntentNextAction,
  out: SchemaOut$PaymentIntentNextAction,
};
