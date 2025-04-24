import {
  External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetailsAddressObj0,
  Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetailsAddressObj0,
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetailsAddressObj0,
} from "./test-helper-confirmation-token-create-body-payment-method-data-billing-details-address-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetails
 */
export type TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetails =
  {
    address?:
      | (
          | TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetailsAddressObj0
          | string
        )
      | undefined;
    email?: (string | string) | undefined;
    name?: (string | string) | undefined;
    phone?: (string | string) | undefined;
  };

/**
 * @internal
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetails =
  {
    address?:
      | (
          | External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetailsAddressObj0
          | string
        )
      | undefined;
    email?: (string | string) | undefined;
    name?: (string | string) | undefined;
    phone?: (string | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetails
 */
const SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetails: z.ZodType<
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: z
      .union([
        Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetailsAddressObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetails
 */
const SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetails: z.ZodType<
  External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetails // the object to be transformed
> = z
  .object({
    address: z
      .union([
        Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetailsAddressObj0.out,
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

export const Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetails =
  {
    in: SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetails,
    out: SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBillingDetails,
  };
