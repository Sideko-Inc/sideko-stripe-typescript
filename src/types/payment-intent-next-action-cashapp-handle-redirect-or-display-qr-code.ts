import {
  External$PaymentIntentNextActionCashappQrCode,
  PaymentIntentNextActionCashappQrCode,
  Schemas$PaymentIntentNextActionCashappQrCode,
} from "./payment-intent-next-action-cashapp-qr-code";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode = {
  /**
   * The URL to the hosted Cash App Pay instructions page, which allows customers to view the QR code, and supports QR code refreshing on expiration.
   */
  hostedInstructionsUrl: string;
  /**
   * The url for mobile redirect based auth
   */
  mobileAuthUrl: string;
  qrCode: PaymentIntentNextActionCashappQrCode;
};

/**
 * @internal
 * PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode =
  {
    hosted_instructions_url: string;
    mobile_auth_url: string;
    qr_code: External$PaymentIntentNextActionCashappQrCode;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode
 */
const SchemaIn$PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode: z.ZodType<
  PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    hosted_instructions_url: z.string(),
    mobile_auth_url: z.string(),
    qr_code: Schemas$PaymentIntentNextActionCashappQrCode.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      hosted_instructions_url: "hostedInstructionsUrl",
      mobile_auth_url: "mobileAuthUrl",
      qr_code: "qrCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode
 */
const SchemaOut$PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode: z.ZodType<
  External$PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode // the object to be transformed
> = z
  .object({
    hostedInstructionsUrl: z.string(),
    mobileAuthUrl: z.string(),
    qrCode: Schemas$PaymentIntentNextActionCashappQrCode.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      hostedInstructionsUrl: "hosted_instructions_url",
      mobileAuthUrl: "mobile_auth_url",
      qrCode: "qr_code",
    });
  });

export const Schemas$PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode =
  {
    in: SchemaIn$PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode,
    out: SchemaOut$PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode,
  };
