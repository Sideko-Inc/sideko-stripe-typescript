import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingCardholderUpdateBodyBillingAddress
 */
export type IssuingCardholderUpdateBodyBillingAddress = {
  city: string;
  country: string;
  line1: string;
  line2?: string | undefined;
  postalCode: string;
  state?: string | undefined;
};

/**
 * @internal
 * IssuingCardholderUpdateBodyBillingAddress without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderUpdateBodyBillingAddress = {
  city: string;
  country: string;
  line1: string;
  line2?: string | undefined;
  postal_code: string;
  state?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderUpdateBodyBillingAddress
 */
const SchemaIn$IssuingCardholderUpdateBodyBillingAddress: z.ZodType<
  IssuingCardholderUpdateBodyBillingAddress, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    city: z.string(),
    country: z.string(),
    line1: z.string(),
    line2: z.string().optional(),
    postal_code: z.string(),
    state: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      city: "city",
      country: "country",
      line1: "line1",
      line2: "line2",
      postal_code: "postalCode",
      state: "state",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderUpdateBodyBillingAddress
 */
const SchemaOut$IssuingCardholderUpdateBodyBillingAddress: z.ZodType<
  External$IssuingCardholderUpdateBodyBillingAddress, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderUpdateBodyBillingAddress // the object to be transformed
> = z
  .object({
    city: z.string(),
    country: z.string(),
    line1: z.string(),
    line2: z.string().optional(),
    postalCode: z.string(),
    state: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      city: "city",
      country: "country",
      line1: "line1",
      line2: "line2",
      postalCode: "postal_code",
      state: "state",
    });
  });

export const Schemas$IssuingCardholderUpdateBodyBillingAddress = {
  in: SchemaIn$IssuingCardholderUpdateBodyBillingAddress,
  out: SchemaOut$IssuingCardholderUpdateBodyBillingAddress,
};
