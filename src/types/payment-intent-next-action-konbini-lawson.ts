import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextActionKonbiniLawson = {
  /**
   * The confirmation number.
   */
  confirmationNumber?: string | undefined;
  /**
   * The payment code.
   */
  paymentCode: string;
};

/**
 * @internal
 * PaymentIntentNextActionKonbiniLawson without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextActionKonbiniLawson = {
  confirmation_number?: string | undefined;
  payment_code: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextActionKonbiniLawson
 */
const SchemaIn$PaymentIntentNextActionKonbiniLawson: z.ZodType<
  PaymentIntentNextActionKonbiniLawson, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    confirmation_number: z.string().optional(),
    payment_code: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      confirmation_number: "confirmationNumber",
      payment_code: "paymentCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextActionKonbiniLawson
 */
const SchemaOut$PaymentIntentNextActionKonbiniLawson: z.ZodType<
  External$PaymentIntentNextActionKonbiniLawson, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextActionKonbiniLawson // the object to be transformed
> = z
  .object({
    confirmationNumber: z.string().optional(),
    paymentCode: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      confirmationNumber: "confirmation_number",
      paymentCode: "payment_code",
    });
  });

export const Schemas$PaymentIntentNextActionKonbiniLawson = {
  in: SchemaIn$PaymentIntentNextActionKonbiniLawson,
  out: SchemaOut$PaymentIntentNextActionKonbiniLawson,
};
