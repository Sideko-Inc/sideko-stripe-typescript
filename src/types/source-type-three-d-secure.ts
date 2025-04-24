import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceTypeThreeDSecure
 */
export type SourceTypeThreeDSecure = {
  addressLine1Check?: string | null | undefined;
  addressZipCheck?: string | null | undefined;
  authenticated?: boolean | null | undefined;
  brand?: string | null | undefined;
  card?: string | null | undefined;
  country?: string | null | undefined;
  customer?: string | null | undefined;
  cvcCheck?: string | null | undefined;
  dynamicLast4?: string | null | undefined;
  expMonth?: number | null | undefined;
  expYear?: number | null | undefined;
  fingerprint?: string | undefined;
  funding?: string | null | undefined;
  last4?: string | null | undefined;
  name?: string | null | undefined;
  threeDSecure?: string | undefined;
  tokenizationMethod?: string | null | undefined;
};

/**
 * @internal
 * SourceTypeThreeDSecure without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTypeThreeDSecure = {
  address_line1_check?: string | null | undefined;
  address_zip_check?: string | null | undefined;
  authenticated?: boolean | null | undefined;
  brand?: string | null | undefined;
  card?: string | null | undefined;
  country?: string | null | undefined;
  customer?: string | null | undefined;
  cvc_check?: string | null | undefined;
  dynamic_last4?: string | null | undefined;
  exp_month?: number | null | undefined;
  exp_year?: number | null | undefined;
  fingerprint?: string | undefined;
  funding?: string | null | undefined;
  last4?: string | null | undefined;
  name?: string | null | undefined;
  three_d_secure?: string | undefined;
  tokenization_method?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTypeThreeDSecure
 */
const SchemaIn$SourceTypeThreeDSecure: z.ZodType<
  SourceTypeThreeDSecure, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address_line1_check: z.string().nullable().optional(),
    address_zip_check: z.string().nullable().optional(),
    authenticated: z.boolean().nullable().optional(),
    brand: z.string().nullable().optional(),
    card: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    customer: z.string().nullable().optional(),
    cvc_check: z.string().nullable().optional(),
    dynamic_last4: z.string().nullable().optional(),
    exp_month: z.number().int().nullable().optional(),
    exp_year: z.number().int().nullable().optional(),
    fingerprint: z.string().optional(),
    funding: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    three_d_secure: z.string().optional(),
    tokenization_method: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address_line1_check: "addressLine1Check",
      address_zip_check: "addressZipCheck",
      authenticated: "authenticated",
      brand: "brand",
      card: "card",
      country: "country",
      customer: "customer",
      cvc_check: "cvcCheck",
      dynamic_last4: "dynamicLast4",
      exp_month: "expMonth",
      exp_year: "expYear",
      fingerprint: "fingerprint",
      funding: "funding",
      last4: "last4",
      name: "name",
      three_d_secure: "threeDSecure",
      tokenization_method: "tokenizationMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTypeThreeDSecure
 */
const SchemaOut$SourceTypeThreeDSecure: z.ZodType<
  External$SourceTypeThreeDSecure, // output type of this zod object
  z.ZodTypeDef,
  SourceTypeThreeDSecure // the object to be transformed
> = z
  .object({
    addressLine1Check: z.string().nullable().optional(),
    addressZipCheck: z.string().nullable().optional(),
    authenticated: z.boolean().nullable().optional(),
    brand: z.string().nullable().optional(),
    card: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    customer: z.string().nullable().optional(),
    cvcCheck: z.string().nullable().optional(),
    dynamicLast4: z.string().nullable().optional(),
    expMonth: z.number().int().nullable().optional(),
    expYear: z.number().int().nullable().optional(),
    fingerprint: z.string().optional(),
    funding: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    threeDSecure: z.string().optional(),
    tokenizationMethod: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      addressLine1Check: "address_line1_check",
      addressZipCheck: "address_zip_check",
      authenticated: "authenticated",
      brand: "brand",
      card: "card",
      country: "country",
      customer: "customer",
      cvcCheck: "cvc_check",
      dynamicLast4: "dynamic_last4",
      expMonth: "exp_month",
      expYear: "exp_year",
      fingerprint: "fingerprint",
      funding: "funding",
      last4: "last4",
      name: "name",
      threeDSecure: "three_d_secure",
      tokenizationMethod: "tokenization_method",
    });
  });

export const Schemas$SourceTypeThreeDSecure = {
  in: SchemaIn$SourceTypeThreeDSecure,
  out: SchemaOut$SourceTypeThreeDSecure,
};
