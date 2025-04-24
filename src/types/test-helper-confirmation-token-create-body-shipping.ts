import {
  External$TestHelperConfirmationTokenCreateBodyShippingAddress,
  Schemas$TestHelperConfirmationTokenCreateBodyShippingAddress,
  TestHelperConfirmationTokenCreateBodyShippingAddress,
} from "./test-helper-confirmation-token-create-body-shipping-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Shipping information for this ConfirmationToken.
 */
export type TestHelperConfirmationTokenCreateBodyShipping = {
  address: TestHelperConfirmationTokenCreateBodyShippingAddress;
  name: string;
  phone?: (string | string) | undefined;
};

/**
 * @internal
 * TestHelperConfirmationTokenCreateBodyShipping without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperConfirmationTokenCreateBodyShipping = {
  address: External$TestHelperConfirmationTokenCreateBodyShippingAddress;
  name: string;
  phone?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperConfirmationTokenCreateBodyShipping
 */
const SchemaIn$TestHelperConfirmationTokenCreateBodyShipping: z.ZodType<
  TestHelperConfirmationTokenCreateBodyShipping, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$TestHelperConfirmationTokenCreateBodyShippingAddress.in,
    name: z.string(),
    phone: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      name: "name",
      phone: "phone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperConfirmationTokenCreateBodyShipping
 */
const SchemaOut$TestHelperConfirmationTokenCreateBodyShipping: z.ZodType<
  External$TestHelperConfirmationTokenCreateBodyShipping, // output type of this zod object
  z.ZodTypeDef,
  TestHelperConfirmationTokenCreateBodyShipping // the object to be transformed
> = z
  .object({
    address: Schemas$TestHelperConfirmationTokenCreateBodyShippingAddress.out,
    name: z.string(),
    phone: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      name: "name",
      phone: "phone",
    });
  });

export const Schemas$TestHelperConfirmationTokenCreateBodyShipping = {
  in: SchemaIn$TestHelperConfirmationTokenCreateBodyShipping,
  out: SchemaOut$TestHelperConfirmationTokenCreateBodyShipping,
};
