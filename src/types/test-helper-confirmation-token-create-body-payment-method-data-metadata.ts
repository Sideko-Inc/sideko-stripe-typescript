import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataMetadata
 */
export type TestHelperConfirmationTokenCreateBodyPaymentMethodDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataMetadata =
  {
    [additionalProperty: string]:
      | External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataMetadata
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperConfirmationTokenCreateBodyPaymentMethodDataMetadata
 */
const SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataMetadata: z.ZodType<
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataMetadata
 */
const SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataMetadata: z.ZodType<
  External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodDataMetadata =
  {
    in: SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataMetadata,
    out: SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataMetadata,
  };
