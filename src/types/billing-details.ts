import { Address, External$Address, Schemas$Address } from "./address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingDetails = {
  address?: Address | undefined;
  /**
   * Email address.
   */
  email?: string | null | undefined;
  /**
   * Full name.
   */
  name?: string | null | undefined;
  /**
   * Billing phone number (including extension).
   */
  phone?: string | null | undefined;
};

/**
 * @internal
 * BillingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingDetails = {
  address?: External$Address | undefined;
  email?: string | null | undefined;
  name?: string | null | undefined;
  phone?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingDetails
 */
const SchemaIn$BillingDetails: z.ZodType<
  BillingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$Address.in.optional(),
    email: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    phone: z.string().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingDetails
 */
const SchemaOut$BillingDetails: z.ZodType<
  External$BillingDetails, // output type of this zod object
  z.ZodTypeDef,
  BillingDetails // the object to be transformed
> = z
  .object({
    address: Schemas$Address.out.optional(),
    email: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    phone: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      email: "email",
      name: "name",
      phone: "phone",
    });
  });

export const Schemas$BillingDetails = {
  in: SchemaIn$BillingDetails,
  out: SchemaOut$BillingDetails,
};
