import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodConfigBizPaymentMethodConfigurationDetails = {
  /**
   * ID of the payment method configuration used.
   */
  id: string;
  /**
   * ID of the parent payment method configuration used.
   */
  parent?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodConfigBizPaymentMethodConfigurationDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigBizPaymentMethodConfigurationDetails = {
  id: string;
  parent?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigBizPaymentMethodConfigurationDetails
 */
const SchemaIn$PaymentMethodConfigBizPaymentMethodConfigurationDetails: z.ZodType<
  PaymentMethodConfigBizPaymentMethodConfigurationDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.string(),
    parent: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      parent: "parent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigBizPaymentMethodConfigurationDetails
 */
const SchemaOut$PaymentMethodConfigBizPaymentMethodConfigurationDetails: z.ZodType<
  External$PaymentMethodConfigBizPaymentMethodConfigurationDetails, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigBizPaymentMethodConfigurationDetails // the object to be transformed
> = z
  .object({
    id: z.string(),
    parent: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      parent: "parent",
    });
  });

export const Schemas$PaymentMethodConfigBizPaymentMethodConfigurationDetails = {
  in: SchemaIn$PaymentMethodConfigBizPaymentMethodConfigurationDetails,
  out: SchemaOut$PaymentMethodConfigBizPaymentMethodConfigurationDetails,
};
