import { Address, External$Address, Schemas$Address } from "./address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SourceOwner = {
  address?: Address | undefined;
  /**
   * Owner's email address.
   */
  email?: string | null | undefined;
  /**
   * Owner's full name.
   */
  name?: string | null | undefined;
  /**
   * Owner's phone number (including extension).
   */
  phone?: string | null | undefined;
  verifiedAddress?: Address | undefined;
  /**
   * Verified owner's email address. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  verifiedEmail?: string | null | undefined;
  /**
   * Verified owner's full name. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  verifiedName?: string | null | undefined;
  /**
   * Verified owner's phone number (including extension). Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  verifiedPhone?: string | null | undefined;
};

/**
 * @internal
 * SourceOwner without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceOwner = {
  address?: External$Address | undefined;
  email?: string | null | undefined;
  name?: string | null | undefined;
  phone?: string | null | undefined;
  verified_address?: External$Address | undefined;
  verified_email?: string | null | undefined;
  verified_name?: string | null | undefined;
  verified_phone?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceOwner
 */
const SchemaIn$SourceOwner: z.ZodType<
  SourceOwner, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$Address.in.optional(),
    email: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    phone: z.string().nullable().optional(),
    verified_address: Schemas$Address.in.optional(),
    verified_email: z.string().nullable().optional(),
    verified_name: z.string().nullable().optional(),
    verified_phone: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      email: "email",
      name: "name",
      phone: "phone",
      verified_address: "verifiedAddress",
      verified_email: "verifiedEmail",
      verified_name: "verifiedName",
      verified_phone: "verifiedPhone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceOwner
 */
const SchemaOut$SourceOwner: z.ZodType<
  External$SourceOwner, // output type of this zod object
  z.ZodTypeDef,
  SourceOwner // the object to be transformed
> = z
  .object({
    address: Schemas$Address.out.optional(),
    email: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    phone: z.string().nullable().optional(),
    verifiedAddress: Schemas$Address.out.optional(),
    verifiedEmail: z.string().nullable().optional(),
    verifiedName: z.string().nullable().optional(),
    verifiedPhone: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      email: "email",
      name: "name",
      phone: "phone",
      verifiedAddress: "verified_address",
      verifiedEmail: "verified_email",
      verifiedName: "verified_name",
      verifiedPhone: "verified_phone",
    });
  });

export const Schemas$SourceOwner = {
  in: SchemaIn$SourceOwner,
  out: SchemaOut$SourceOwner,
};
