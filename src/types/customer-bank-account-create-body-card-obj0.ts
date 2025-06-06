import {
  CustomerBankAccountCreateBodyCardObj0Metadata,
  External$CustomerBankAccountCreateBodyCardObj0Metadata,
  Schemas$CustomerBankAccountCreateBodyCardObj0Metadata,
} from "./customer-bank-account-create-body-card-obj0-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerBankAccountCreateBodyCardObj0
 */
export type CustomerBankAccountCreateBodyCardObj0 = {
  addressCity?: string | undefined;
  addressCountry?: string | undefined;
  addressLine1?: string | undefined;
  addressLine2?: string | undefined;
  addressState?: string | undefined;
  addressZip?: string | undefined;
  cvc?: string | undefined;
  expMonth: number;
  expYear: number;
  metadata?: CustomerBankAccountCreateBodyCardObj0Metadata | undefined;
  name?: string | undefined;
  number: string;
  object?: "card" | undefined;
};

/**
 * @internal
 * CustomerBankAccountCreateBodyCardObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBankAccountCreateBodyCardObj0 = {
  address_city?: string | undefined;
  address_country?: string | undefined;
  address_line1?: string | undefined;
  address_line2?: string | undefined;
  address_state?: string | undefined;
  address_zip?: string | undefined;
  cvc?: string | undefined;
  exp_month: number;
  exp_year: number;
  metadata?: External$CustomerBankAccountCreateBodyCardObj0Metadata | undefined;
  name?: string | undefined;
  number: string;
  object?: "card" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBankAccountCreateBodyCardObj0
 */
const SchemaIn$CustomerBankAccountCreateBodyCardObj0: z.ZodType<
  CustomerBankAccountCreateBodyCardObj0, // output type of this zod object
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
    cvc: z.string().optional(),
    exp_month: z.number().int(),
    exp_year: z.number().int(),
    metadata:
      Schemas$CustomerBankAccountCreateBodyCardObj0Metadata.in.optional(),
    name: z.string().optional(),
    number: z.string(),
    object: z.enum(["card"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address_city: "addressCity",
      address_country: "addressCountry",
      address_line1: "addressLine1",
      address_line2: "addressLine2",
      address_state: "addressState",
      address_zip: "addressZip",
      cvc: "cvc",
      exp_month: "expMonth",
      exp_year: "expYear",
      metadata: "metadata",
      name: "name",
      number: "number",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBankAccountCreateBodyCardObj0
 */
const SchemaOut$CustomerBankAccountCreateBodyCardObj0: z.ZodType<
  External$CustomerBankAccountCreateBodyCardObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerBankAccountCreateBodyCardObj0 // the object to be transformed
> = z
  .object({
    addressCity: z.string().optional(),
    addressCountry: z.string().optional(),
    addressLine1: z.string().optional(),
    addressLine2: z.string().optional(),
    addressState: z.string().optional(),
    addressZip: z.string().optional(),
    cvc: z.string().optional(),
    expMonth: z.number().int(),
    expYear: z.number().int(),
    metadata:
      Schemas$CustomerBankAccountCreateBodyCardObj0Metadata.out.optional(),
    name: z.string().optional(),
    number: z.string(),
    object: z.enum(["card"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      addressCity: "address_city",
      addressCountry: "address_country",
      addressLine1: "address_line1",
      addressLine2: "address_line2",
      addressState: "address_state",
      addressZip: "address_zip",
      cvc: "cvc",
      expMonth: "exp_month",
      expYear: "exp_year",
      metadata: "metadata",
      name: "name",
      number: "number",
      object: "object",
    });
  });

export const Schemas$CustomerBankAccountCreateBodyCardObj0 = {
  in: SchemaIn$CustomerBankAccountCreateBodyCardObj0,
  out: SchemaOut$CustomerBankAccountCreateBodyCardObj0,
};
