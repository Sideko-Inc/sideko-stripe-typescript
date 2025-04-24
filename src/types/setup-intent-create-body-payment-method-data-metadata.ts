import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodDataMetadata
 */
export type SetupIntentCreateBodyPaymentMethodDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodDataMetadata = {
  [additionalProperty: string]:
    | External$SetupIntentCreateBodyPaymentMethodDataMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodDataMetadata
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodDataMetadata: z.ZodType<
  SetupIntentCreateBodyPaymentMethodDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodDataMetadata
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodDataMetadata: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SetupIntentCreateBodyPaymentMethodDataMetadata = {
  in: SchemaIn$SetupIntentCreateBodyPaymentMethodDataMetadata,
  out: SchemaOut$SetupIntentCreateBodyPaymentMethodDataMetadata,
};
