import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodCreateBodyBillingDetailsAddressObj0
 */
export type PaymentMethodCreateBodyBillingDetailsAddressObj0 = {
  city?: string | undefined;
  country?: string | undefined;
  line1?: string | undefined;
  line2?: string | undefined;
  postalCode?: string | undefined;
  state?: string | undefined;
};

/**
 * @internal
 * PaymentMethodCreateBodyBillingDetailsAddressObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCreateBodyBillingDetailsAddressObj0 = {
  city?: string | undefined;
  country?: string | undefined;
  line1?: string | undefined;
  line2?: string | undefined;
  postal_code?: string | undefined;
  state?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCreateBodyBillingDetailsAddressObj0
 */
const SchemaIn$PaymentMethodCreateBodyBillingDetailsAddressObj0: z.ZodType<
  PaymentMethodCreateBodyBillingDetailsAddressObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    city: z.string().optional(),
    country: z.string().optional(),
    line1: z.string().optional(),
    line2: z.string().optional(),
    postal_code: z.string().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCreateBodyBillingDetailsAddressObj0
 */
const SchemaOut$PaymentMethodCreateBodyBillingDetailsAddressObj0: z.ZodType<
  External$PaymentMethodCreateBodyBillingDetailsAddressObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCreateBodyBillingDetailsAddressObj0 // the object to be transformed
> = z
  .object({
    city: z.string().optional(),
    country: z.string().optional(),
    line1: z.string().optional(),
    line2: z.string().optional(),
    postalCode: z.string().optional(),
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

export const Schemas$PaymentMethodCreateBodyBillingDetailsAddressObj0 = {
  in: SchemaIn$PaymentMethodCreateBodyBillingDetailsAddressObj0,
  out: SchemaOut$PaymentMethodCreateBodyBillingDetailsAddressObj0,
};
