import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentVerifyMicrodepositsBody
 */
export type PaymentIntentVerifyMicrodepositsBody = {
  /**
   * Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account.
   */
  amounts?: number[] | undefined;
  /**
   * The client secret of the PaymentIntent.
   */
  clientSecret?: string | undefined;
  /**
   * A six-character code starting with SM present in the microdeposit sent to the bank account.
   */
  descriptorCode?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number[] | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PaymentIntentVerifyMicrodepositsBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentVerifyMicrodepositsBody = {
  amounts?: number[] | undefined;
  client_secret?: string | undefined;
  descriptor_code?: string | undefined;
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | (number[] | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | External$PaymentIntentVerifyMicrodepositsBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentVerifyMicrodepositsBody
 */
const SchemaIn$PaymentIntentVerifyMicrodepositsBody: z.ZodType<
  PaymentIntentVerifyMicrodepositsBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amounts: z.array(z.number().int()).optional(),
    client_secret: z.string().optional(),
    descriptor_code: z.string().optional(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amounts: "amounts",
      client_secret: "clientSecret",
      descriptor_code: "descriptorCode",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentVerifyMicrodepositsBody
 */
const SchemaOut$PaymentIntentVerifyMicrodepositsBody: z.ZodType<
  External$PaymentIntentVerifyMicrodepositsBody, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentVerifyMicrodepositsBody // the object to be transformed
> = z
  .object({
    amounts: z.array(z.number().int()).optional(),
    clientSecret: z.string().optional(),
    descriptorCode: z.string().optional(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amounts: "amounts",
      clientSecret: "client_secret",
      descriptorCode: "descriptor_code",
      expand: "expand",
    });
  });

export const Schemas$PaymentIntentVerifyMicrodepositsBody = {
  in: SchemaIn$PaymentIntentVerifyMicrodepositsBody,
  out: SchemaOut$PaymentIntentVerifyMicrodepositsBody,
};
