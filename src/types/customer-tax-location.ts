import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CustomerTaxLocation = {
  /**
   * The identified tax country of the customer.
   */
  country: string;
  /**
   * The data source used to infer the customer's location.
   */
  source:
    | "billing_address"
    | "ip_address"
    | "payment_method"
    | "shipping_destination";
  /**
   * The identified tax state, county, province, or region of the customer.
   */
  state?: string | null | undefined;
};

/**
 * @internal
 * CustomerTaxLocation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerTaxLocation = {
  country: string;
  source:
    | "billing_address"
    | "ip_address"
    | "payment_method"
    | "shipping_destination";
  state?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerTaxLocation
 */
const SchemaIn$CustomerTaxLocation: z.ZodType<
  CustomerTaxLocation, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    country: z.string(),
    source: z.enum([
      "billing_address",
      "ip_address",
      "payment_method",
      "shipping_destination",
    ]),
    state: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
      source: "source",
      state: "state",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerTaxLocation
 */
const SchemaOut$CustomerTaxLocation: z.ZodType<
  External$CustomerTaxLocation, // output type of this zod object
  z.ZodTypeDef,
  CustomerTaxLocation // the object to be transformed
> = z
  .object({
    country: z.string(),
    source: z.enum([
      "billing_address",
      "ip_address",
      "payment_method",
      "shipping_destination",
    ]),
    state: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
      source: "source",
      state: "state",
    });
  });

export const Schemas$CustomerTaxLocation = {
  in: SchemaIn$CustomerTaxLocation,
  out: SchemaOut$CustomerTaxLocation,
};
