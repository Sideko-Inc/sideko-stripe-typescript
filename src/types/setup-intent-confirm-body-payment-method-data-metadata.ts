import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodDataMetadata
 */
export type SetupIntentConfirmBodyPaymentMethodDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodDataMetadata = {
  [additionalProperty: string]:
    | External$SetupIntentConfirmBodyPaymentMethodDataMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodDataMetadata
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodDataMetadata: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodDataMetadata
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodDataMetadata: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SetupIntentConfirmBodyPaymentMethodDataMetadata = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodDataMetadata,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodDataMetadata,
};
