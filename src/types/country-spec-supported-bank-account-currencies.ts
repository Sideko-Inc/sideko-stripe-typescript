import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Currencies that can be accepted in the specific country (for transfers).
 */
export type CountrySpecSupportedBankAccountCurrencies = {
  [additionalProperty: string]: string[] | null | undefined;
};

/**
 * @internal
 * CountrySpecSupportedBankAccountCurrencies without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CountrySpecSupportedBankAccountCurrencies = {
  [additionalProperty: string]:
    | External$CountrySpecSupportedBankAccountCurrencies
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CountrySpecSupportedBankAccountCurrencies
 */
const SchemaIn$CountrySpecSupportedBankAccountCurrencies: z.ZodType<
  CountrySpecSupportedBankAccountCurrencies, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.array(z.string()))
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CountrySpecSupportedBankAccountCurrencies
 */
const SchemaOut$CountrySpecSupportedBankAccountCurrencies: z.ZodType<
  External$CountrySpecSupportedBankAccountCurrencies, // output type of this zod object
  z.ZodTypeDef,
  CountrySpecSupportedBankAccountCurrencies // the object to be transformed
> = z
  .object({})
  .catchall(z.array(z.string()))
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CountrySpecSupportedBankAccountCurrencies = {
  in: SchemaIn$CountrySpecSupportedBankAccountCurrencies,
  out: SchemaOut$CountrySpecSupportedBankAccountCurrencies,
};
