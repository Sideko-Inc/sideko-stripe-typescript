import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodDataMetadata
 */
export type SetupIntentUpdateBodyPaymentMethodDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodDataMetadata = {
  [additionalProperty: string]:
    | External$SetupIntentUpdateBodyPaymentMethodDataMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodDataMetadata
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodDataMetadata: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodDataMetadata
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodDataMetadata: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SetupIntentUpdateBodyPaymentMethodDataMetadata = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodDataMetadata,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodDataMetadata,
};
