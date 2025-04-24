import {
  External$PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode,
  PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode,
  Schemas$PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode,
} from "./payment-intent-next-action-cashapp-handle-redirect-or-display-qr-code";
import {
  External$SetupIntentNextActionRedirectToUrl,
  Schemas$SetupIntentNextActionRedirectToUrl,
  SetupIntentNextActionRedirectToUrl,
} from "./setup-intent-next-action-redirect-to-url";
import {
  External$SetupIntentNextActionVerifyWithMicrodeposits,
  Schemas$SetupIntentNextActionVerifyWithMicrodeposits,
  SetupIntentNextActionVerifyWithMicrodeposits,
} from "./setup-intent-next-action-verify-with-microdeposits";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SetupIntentNextAction = {
  cashappHandleRedirectOrDisplayQrCode?:
    | PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode
    | undefined;
  redirectToUrl?: SetupIntentNextActionRedirectToUrl | undefined;
  /**
   * Type of the next action to perform, one of `redirect_to_url`, `use_stripe_sdk`, `alipay_handle_redirect`, `oxxo_display_details`, or `verify_with_microdeposits`.
   */
  type: string;
  /**
   * When confirming a SetupIntent with Stripe.js, Stripe.js depends on the contents of this dictionary to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by Stripe.js.
   */
  useStripeSdk?: Record<string, any> | undefined;
  verifyWithMicrodeposits?:
    | SetupIntentNextActionVerifyWithMicrodeposits
    | undefined;
};

/**
 * @internal
 * SetupIntentNextAction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentNextAction = {
  cashapp_handle_redirect_or_display_qr_code?:
    | External$PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode
    | undefined;
  redirect_to_url?: External$SetupIntentNextActionRedirectToUrl | undefined;
  type: string;
  use_stripe_sdk?: Record<string, any> | undefined;
  verify_with_microdeposits?:
    | External$SetupIntentNextActionVerifyWithMicrodeposits
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentNextAction
 */
const SchemaIn$SetupIntentNextAction: z.ZodType<
  SetupIntentNextAction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cashapp_handle_redirect_or_display_qr_code:
      Schemas$PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode.in.optional(),
    redirect_to_url: Schemas$SetupIntentNextActionRedirectToUrl.in.optional(),
    type: z.string(),
    use_stripe_sdk: z.record(z.string(), z.any()).optional(),
    verify_with_microdeposits:
      Schemas$SetupIntentNextActionVerifyWithMicrodeposits.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cashapp_handle_redirect_or_display_qr_code:
        "cashappHandleRedirectOrDisplayQrCode",
      redirect_to_url: "redirectToUrl",
      type: "type",
      use_stripe_sdk: "useStripeSdk",
      verify_with_microdeposits: "verifyWithMicrodeposits",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentNextAction
 */
const SchemaOut$SetupIntentNextAction: z.ZodType<
  External$SetupIntentNextAction, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentNextAction // the object to be transformed
> = z
  .object({
    cashappHandleRedirectOrDisplayQrCode:
      Schemas$PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode.out.optional(),
    redirectToUrl: Schemas$SetupIntentNextActionRedirectToUrl.out.optional(),
    type: z.string(),
    useStripeSdk: z.record(z.string(), z.any()).optional(),
    verifyWithMicrodeposits:
      Schemas$SetupIntentNextActionVerifyWithMicrodeposits.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cashappHandleRedirectOrDisplayQrCode:
        "cashapp_handle_redirect_or_display_qr_code",
      redirectToUrl: "redirect_to_url",
      type: "type",
      useStripeSdk: "use_stripe_sdk",
      verifyWithMicrodeposits: "verify_with_microdeposits",
    });
  });

export const Schemas$SetupIntentNextAction = {
  in: SchemaIn$SetupIntentNextAction,
  out: SchemaOut$SetupIntentNextAction,
};
