import { Address, External$Address, Schemas$Address } from "./address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasurySharedResourceBillingDetails = {
  address: Address;
  /**
   * Email address.
   */
  email?: string | null | undefined;
  /**
   * Full name.
   */
  name?: string | null | undefined;
};

/**
 * @internal
 * TreasurySharedResourceBillingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasurySharedResourceBillingDetails = {
  address: External$Address;
  email?: string | null | undefined;
  name?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasurySharedResourceBillingDetails
 */
const SchemaIn$TreasurySharedResourceBillingDetails: z.ZodType<
  TreasurySharedResourceBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$Address.in,
    email: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      email: "email",
      name: "name",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasurySharedResourceBillingDetails
 */
const SchemaOut$TreasurySharedResourceBillingDetails: z.ZodType<
  External$TreasurySharedResourceBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  TreasurySharedResourceBillingDetails // the object to be transformed
> = z
  .object({
    address: Schemas$Address.out,
    email: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      email: "email",
      name: "name",
    });
  });

export const Schemas$TreasurySharedResourceBillingDetails = {
  in: SchemaIn$TreasurySharedResourceBillingDetails,
  out: SchemaOut$TreasurySharedResourceBillingDetails,
};
