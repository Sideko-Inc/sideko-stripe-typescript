import {
  External$PaymentIntentNextActionSwishQrCode,
  PaymentIntentNextActionSwishQrCode,
  Schemas$PaymentIntentNextActionSwishQrCode,
} from "./payment-intent-next-action-swish-qr-code";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode = {
  /**
   * The URL to the hosted Swish instructions page, which allows customers to view the QR code.
   */
  hostedInstructionsUrl: string;
  qrCode: PaymentIntentNextActionSwishQrCode;
};

/**
 * @internal
 * PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode =
  {
    hosted_instructions_url: string;
    qr_code: External$PaymentIntentNextActionSwishQrCode;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode
 */
const SchemaIn$PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode: z.ZodType<
  PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    hosted_instructions_url: z.string(),
    qr_code: Schemas$PaymentIntentNextActionSwishQrCode.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      hosted_instructions_url: "hostedInstructionsUrl",
      qr_code: "qrCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode
 */
const SchemaOut$PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode: z.ZodType<
  External$PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode // the object to be transformed
> = z
  .object({
    hostedInstructionsUrl: z.string(),
    qrCode: Schemas$PaymentIntentNextActionSwishQrCode.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      hostedInstructionsUrl: "hosted_instructions_url",
      qrCode: "qr_code",
    });
  });

export const Schemas$PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode =
  {
    in: SchemaIn$PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode,
    out: SchemaOut$PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode,
  };
