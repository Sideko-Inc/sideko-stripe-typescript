import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The person's address.
 */
export type AccountPeopleCreateBodyAddress = {
  city?: string | undefined;
  country?: string | undefined;
  line1?: string | undefined;
  line2?: string | undefined;
  postalCode?: string | undefined;
  state?: string | undefined;
};

/**
 * @internal
 * AccountPeopleCreateBodyAddress without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleCreateBodyAddress = {
  city?: string | undefined;
  country?: string | undefined;
  line1?: string | undefined;
  line2?: string | undefined;
  postal_code?: string | undefined;
  state?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleCreateBodyAddress
 */
const SchemaIn$AccountPeopleCreateBodyAddress: z.ZodType<
  AccountPeopleCreateBodyAddress, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleCreateBodyAddress
 */
const SchemaOut$AccountPeopleCreateBodyAddress: z.ZodType<
  External$AccountPeopleCreateBodyAddress, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleCreateBodyAddress // the object to be transformed
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

export const Schemas$AccountPeopleCreateBodyAddress = {
  in: SchemaIn$AccountPeopleCreateBodyAddress,
  out: SchemaOut$AccountPeopleCreateBodyAddress,
};
