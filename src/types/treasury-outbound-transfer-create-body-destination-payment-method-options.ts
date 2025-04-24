import {
  External$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0,
  Schemas$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0,
  TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0,
} from "./treasury-outbound-transfer-create-body-destination-payment-method-options-us-bank-account-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Hash describing payment method configuration details.
 */
export type TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions =
  {
    usBankAccount?:
      | (
          | TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0
          | string
        )
      | undefined;
  };

/**
 * @internal
 * TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions =
  {
    us_bank_account?:
      | (
          | External$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0
          | string
        )
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions
 */
const SchemaIn$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions: z.ZodType<
  TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    us_bank_account: z
      .union([
        Schemas$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions
 */
const SchemaOut$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions: z.ZodType<
  External$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions // the object to be transformed
> = z
  .object({
    usBankAccount: z
      .union([
        Schemas$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0.out,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      usBankAccount: "us_bank_account",
    });
  });

export const Schemas$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions =
  {
    in: SchemaIn$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions,
    out: SchemaOut$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions,
  };
