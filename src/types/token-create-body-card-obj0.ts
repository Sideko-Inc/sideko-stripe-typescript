import {
  External$TokenCreateBodyCardObj0Networks,
  Schemas$TokenCreateBodyCardObj0Networks,
  TokenCreateBodyCardObj0Networks,
} from "./token-create-body-card-obj0-networks";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyCardObj0
 */
export type TokenCreateBodyCardObj0 = {
  addressCity?: string | undefined;
  addressCountry?: string | undefined;
  addressLine1?: string | undefined;
  addressLine2?: string | undefined;
  addressState?: string | undefined;
  addressZip?: string | undefined;
  currency?: string | undefined;
  cvc?: string | undefined;
  expMonth: string;
  expYear: string;
  name?: string | undefined;
  networks?: TokenCreateBodyCardObj0Networks | undefined;
  number: string;
};

/**
 * @internal
 * TokenCreateBodyCardObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyCardObj0 = {
  address_city?: string | undefined;
  address_country?: string | undefined;
  address_line1?: string | undefined;
  address_line2?: string | undefined;
  address_state?: string | undefined;
  address_zip?: string | undefined;
  currency?: string | undefined;
  cvc?: string | undefined;
  exp_month: string;
  exp_year: string;
  name?: string | undefined;
  networks?: External$TokenCreateBodyCardObj0Networks | undefined;
  number: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyCardObj0
 */
const SchemaIn$TokenCreateBodyCardObj0: z.ZodType<
  TokenCreateBodyCardObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address_city: z.string().optional(),
    address_country: z.string().optional(),
    address_line1: z.string().optional(),
    address_line2: z.string().optional(),
    address_state: z.string().optional(),
    address_zip: z.string().optional(),
    currency: z.string().optional(),
    cvc: z.string().optional(),
    exp_month: z.string(),
    exp_year: z.string(),
    name: z.string().optional(),
    networks: Schemas$TokenCreateBodyCardObj0Networks.in.optional(),
    number: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address_city: "addressCity",
      address_country: "addressCountry",
      address_line1: "addressLine1",
      address_line2: "addressLine2",
      address_state: "addressState",
      address_zip: "addressZip",
      currency: "currency",
      cvc: "cvc",
      exp_month: "expMonth",
      exp_year: "expYear",
      name: "name",
      networks: "networks",
      number: "number",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyCardObj0
 */
const SchemaOut$TokenCreateBodyCardObj0: z.ZodType<
  External$TokenCreateBodyCardObj0, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyCardObj0 // the object to be transformed
> = z
  .object({
    addressCity: z.string().optional(),
    addressCountry: z.string().optional(),
    addressLine1: z.string().optional(),
    addressLine2: z.string().optional(),
    addressState: z.string().optional(),
    addressZip: z.string().optional(),
    currency: z.string().optional(),
    cvc: z.string().optional(),
    expMonth: z.string(),
    expYear: z.string(),
    name: z.string().optional(),
    networks: Schemas$TokenCreateBodyCardObj0Networks.out.optional(),
    number: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      addressCity: "address_city",
      addressCountry: "address_country",
      addressLine1: "address_line1",
      addressLine2: "address_line2",
      addressState: "address_state",
      addressZip: "address_zip",
      currency: "currency",
      cvc: "cvc",
      expMonth: "exp_month",
      expYear: "exp_year",
      name: "name",
      networks: "networks",
      number: "number",
    });
  });

export const Schemas$TokenCreateBodyCardObj0 = {
  in: SchemaIn$TokenCreateBodyCardObj0,
  out: SchemaOut$TokenCreateBodyCardObj0,
};
