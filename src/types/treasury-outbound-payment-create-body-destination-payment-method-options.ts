import {
  External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0,
  Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0,
  TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0,
} from "./treasury-outbound-payment-create-body-destination-payment-method-options-us-bank-account-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Payment method-specific configuration for this OutboundPayment.
 */
export type TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions = {
  usBankAccount?:
    | (
        | TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0
        | string
      )
    | undefined;
};

/**
 * @internal
 * TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions =
  {
    us_bank_account?:
      | (
          | External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0
          | string
        )
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions
 */
const SchemaIn$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions: z.ZodType<
  TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    us_bank_account: z
      .union([
        Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0.in,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      us_bank_account: "usBankAccount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions
 */
const SchemaOut$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions: z.ZodType<
  External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions // the object to be transformed
> = z
  .object({
    usBankAccount: z
      .union([
        Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0.out,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      usBankAccount: "us_bank_account",
    });
  });

export const Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions =
  {
    in: SchemaIn$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions,
    out: SchemaOut$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions,
  };
