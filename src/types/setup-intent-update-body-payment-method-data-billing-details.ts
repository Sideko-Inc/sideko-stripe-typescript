import {
  External$SetupIntentUpdateBodyPaymentMethodDataBillingDetailsAddressObj0,
  Schemas$SetupIntentUpdateBodyPaymentMethodDataBillingDetailsAddressObj0,
  SetupIntentUpdateBodyPaymentMethodDataBillingDetailsAddressObj0,
} from "./setup-intent-update-body-payment-method-data-billing-details-address-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodDataBillingDetails
 */
export type SetupIntentUpdateBodyPaymentMethodDataBillingDetails = {
  address?:
    | (SetupIntentUpdateBodyPaymentMethodDataBillingDetailsAddressObj0 | string)
    | undefined;
  email?: (string | string) | undefined;
  name?: (string | string) | undefined;
  phone?: (string | string) | undefined;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodDataBillingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodDataBillingDetails = {
  address?:
    | (
        | External$SetupIntentUpdateBodyPaymentMethodDataBillingDetailsAddressObj0
        | string
      )
    | undefined;
  email?: (string | string) | undefined;
  name?: (string | string) | undefined;
  phone?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodDataBillingDetails
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodDataBillingDetails: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodDataBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: z
      .union([
        Schemas$SetupIntentUpdateBodyPaymentMethodDataBillingDetailsAddressObj0.in,
        z.string(),
      ])
      .optional(),
    email: z.union([z.string(), z.string()]).optional(),
    name: z.union([z.string(), z.string()]).optional(),
    phone: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      email: "email",
      name: "name",
      phone: "phone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodDataBillingDetails
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodDataBillingDetails: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodDataBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodDataBillingDetails // the object to be transformed
> = z
  .object({
    address: z
      .union([
        Schemas$SetupIntentUpdateBodyPaymentMethodDataBillingDetailsAddressObj0.out,
        z.string(),
      ])
      .optional(),
    email: z.union([z.string(), z.string()]).optional(),
    name: z.union([z.string(), z.string()]).optional(),
    phone: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      email: "email",
      name: "name",
      phone: "phone",
    });
  });

export const Schemas$SetupIntentUpdateBodyPaymentMethodDataBillingDetails = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodDataBillingDetails,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodDataBillingDetails,
};
