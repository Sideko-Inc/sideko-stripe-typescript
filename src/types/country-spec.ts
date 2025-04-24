import {
  CountrySpecSupportedBankAccountCurrencies,
  External$CountrySpecSupportedBankAccountCurrencies,
  Schemas$CountrySpecSupportedBankAccountCurrencies,
} from "./country-spec-supported-bank-account-currencies";
import {
  CountrySpecVerificationFields,
  External$CountrySpecVerificationFields,
  Schemas$CountrySpecVerificationFields,
} from "./country-spec-verification-fields";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Stripe needs to collect certain pieces of information about each account
 * created. These requirements can differ depending on the account's country. The
 * Country Specs API makes these rules available to your integration.
 *
 * You can also view the information from this API call as [an online
 * guide](/docs/connect/required-verification-information).
 */
export type CountrySpec = {
  /**
   * The default currency for this country. This applies to both payment methods and bank accounts.
   */
  defaultCurrency: string;
  /**
   * Unique identifier for the object. Represented as the ISO country code for this country.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "country_spec";
  /**
   * Currencies that can be accepted in the specific country (for transfers).
   */
  supportedBankAccountCurrencies: CountrySpecSupportedBankAccountCurrencies;
  /**
   * Currencies that can be accepted in the specified country (for payments).
   */
  supportedPaymentCurrencies: string[];
  /**
   * Payment methods available in the specified country. You may need to enable some payment methods (e.g., [ACH](https://stripe.com/docs/ach)) on your account before they appear in this list. The `stripe` payment method refers to [charging through your platform](https://stripe.com/docs/connect/destination-charges).
   */
  supportedPaymentMethods: string[];
  /**
   * Countries that can accept transfers from the specified country.
   */
  supportedTransferCountries: string[];
  verificationFields: CountrySpecVerificationFields;
};

/**
 * @internal
 * CountrySpec without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CountrySpec = {
  default_currency: string;
  id: string;
  object: "country_spec";
  supported_bank_account_currencies: External$CountrySpecSupportedBankAccountCurrencies;
  supported_payment_currencies: string[];
  supported_payment_methods: string[];
  supported_transfer_countries: string[];
  verification_fields: External$CountrySpecVerificationFields;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CountrySpec
 */
const SchemaIn$CountrySpec: z.ZodType<
  CountrySpec, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    default_currency: z.string(),
    id: z.string(),
    object: z.enum(["country_spec"]),
    supported_bank_account_currencies:
      Schemas$CountrySpecSupportedBankAccountCurrencies.in,
    supported_payment_currencies: z.array(z.string()),
    supported_payment_methods: z.array(z.string()),
    supported_transfer_countries: z.array(z.string()),
    verification_fields: Schemas$CountrySpecVerificationFields.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      default_currency: "defaultCurrency",
      id: "id",
      object: "object",
      supported_bank_account_currencies: "supportedBankAccountCurrencies",
      supported_payment_currencies: "supportedPaymentCurrencies",
      supported_payment_methods: "supportedPaymentMethods",
      supported_transfer_countries: "supportedTransferCountries",
      verification_fields: "verificationFields",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CountrySpec
 */
const SchemaOut$CountrySpec: z.ZodType<
  External$CountrySpec, // output type of this zod object
  z.ZodTypeDef,
  CountrySpec // the object to be transformed
> = z
  .object({
    defaultCurrency: z.string(),
    id: z.string(),
    object: z.enum(["country_spec"]),
    supportedBankAccountCurrencies:
      Schemas$CountrySpecSupportedBankAccountCurrencies.out,
    supportedPaymentCurrencies: z.array(z.string()),
    supportedPaymentMethods: z.array(z.string()),
    supportedTransferCountries: z.array(z.string()),
    verificationFields: Schemas$CountrySpecVerificationFields.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaultCurrency: "default_currency",
      id: "id",
      object: "object",
      supportedBankAccountCurrencies: "supported_bank_account_currencies",
      supportedPaymentCurrencies: "supported_payment_currencies",
      supportedPaymentMethods: "supported_payment_methods",
      supportedTransferCountries: "supported_transfer_countries",
      verificationFields: "verification_fields",
    });
  });

export const Schemas$CountrySpec = {
  in: SchemaIn$CountrySpec,
  out: SchemaOut$CountrySpec,
};
