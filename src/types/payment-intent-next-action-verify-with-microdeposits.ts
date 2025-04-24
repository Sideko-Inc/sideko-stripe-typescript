import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextActionVerifyWithMicrodeposits = {
  /**
   * The timestamp when the microdeposits are expected to land.
   */
  arrivalDate: number;
  /**
   * The URL for the hosted verification page, which allows customers to verify their bank account.
   */
  hostedVerificationUrl: string;
  /**
   * The type of the microdeposit sent to the customer. Used to distinguish between different verification methods.
   */
  microdepositType?: ("amounts" | "descriptor_code") | null | undefined;
};

/**
 * @internal
 * PaymentIntentNextActionVerifyWithMicrodeposits without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextActionVerifyWithMicrodeposits = {
  arrival_date: number;
  hosted_verification_url: string;
  microdeposit_type?: ("amounts" | "descriptor_code") | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextActionVerifyWithMicrodeposits
 */
const SchemaIn$PaymentIntentNextActionVerifyWithMicrodeposits: z.ZodType<
  PaymentIntentNextActionVerifyWithMicrodeposits, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    arrival_date: z.number().int(),
    hosted_verification_url: z.string(),
    microdeposit_type: z
      .enum(["amounts", "descriptor_code"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      arrival_date: "arrivalDate",
      hosted_verification_url: "hostedVerificationUrl",
      microdeposit_type: "microdepositType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextActionVerifyWithMicrodeposits
 */
const SchemaOut$PaymentIntentNextActionVerifyWithMicrodeposits: z.ZodType<
  External$PaymentIntentNextActionVerifyWithMicrodeposits, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextActionVerifyWithMicrodeposits // the object to be transformed
> = z
  .object({
    arrivalDate: z.number().int(),
    hostedVerificationUrl: z.string(),
    microdepositType: z
      .enum(["amounts", "descriptor_code"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      arrivalDate: "arrival_date",
      hostedVerificationUrl: "hosted_verification_url",
      microdepositType: "microdeposit_type",
    });
  });

export const Schemas$PaymentIntentNextActionVerifyWithMicrodeposits = {
  in: SchemaIn$PaymentIntentNextActionVerifyWithMicrodeposits,
  out: SchemaOut$PaymentIntentNextActionVerifyWithMicrodeposits,
};
