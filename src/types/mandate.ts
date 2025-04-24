import {
  CustomerAcceptance,
  External$CustomerAcceptance,
  Schemas$CustomerAcceptance,
} from "./customer-acceptance";
import {
  External$MandatePaymentMethodDetails,
  MandatePaymentMethodDetails,
  Schemas$MandatePaymentMethodDetails,
} from "./mandate-payment-method-details";
import {
  External$MandateSingleUse,
  MandateSingleUse,
  Schemas$MandateSingleUse,
} from "./mandate-single-use";
import {
  External$PaymentMethod,
  PaymentMethod,
  Schemas$PaymentMethod,
} from "./payment-method";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A Mandate is a record of the permission that your customer gives you to debit their payment method.
 */
export type Mandate = {
  customerAcceptance: CustomerAcceptance;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  multiUse?: Record<string, any> | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "mandate";
  /**
   * The account (if any) that the mandate is intended for.
   */
  onBehalfOf?: string | undefined;
  /**
   * ID of the payment method associated with this mandate.
   */
  paymentMethod: string | PaymentMethod;
  paymentMethodDetails: MandatePaymentMethodDetails;
  singleUse?: MandateSingleUse | undefined;
  /**
   * The mandate status indicates whether or not you can use it to initiate a payment.
   */
  status: "active" | "inactive" | "pending";
  /**
   * The type of the mandate.
   */
  type: "multi_use" | "single_use";
};

/**
 * @internal
 * Mandate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Mandate = {
  customer_acceptance: External$CustomerAcceptance;
  id: string;
  livemode: boolean;
  multi_use?: Record<string, any> | undefined;
  object: "mandate";
  on_behalf_of?: string | undefined;
  payment_method: string | External$PaymentMethod;
  payment_method_details: External$MandatePaymentMethodDetails;
  single_use?: External$MandateSingleUse | undefined;
  status: "active" | "inactive" | "pending";
  type: "multi_use" | "single_use";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Mandate
 */
const SchemaIn$Mandate: z.ZodType<
  Mandate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer_acceptance: Schemas$CustomerAcceptance.in,
    id: z.string(),
    livemode: z.boolean(),
    multi_use: z.record(z.string(), z.any()).optional(),
    object: z.enum(["mandate"]),
    on_behalf_of: z.string().optional(),
    payment_method: z.union([
      z.string(),
      z.lazy(() => Schemas$PaymentMethod.in),
    ]),
    payment_method_details: Schemas$MandatePaymentMethodDetails.in,
    single_use: Schemas$MandateSingleUse.in.optional(),
    status: z.enum(["active", "inactive", "pending"]),
    type: z.enum(["multi_use", "single_use"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer_acceptance: "customerAcceptance",
      id: "id",
      livemode: "livemode",
      multi_use: "multiUse",
      object: "object",
      on_behalf_of: "onBehalfOf",
      payment_method: "paymentMethod",
      payment_method_details: "paymentMethodDetails",
      single_use: "singleUse",
      status: "status",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Mandate
 */
const SchemaOut$Mandate: z.ZodType<
  External$Mandate, // output type of this zod object
  z.ZodTypeDef,
  Mandate // the object to be transformed
> = z
  .object({
    customerAcceptance: Schemas$CustomerAcceptance.out,
    id: z.string(),
    livemode: z.boolean(),
    multiUse: z.record(z.string(), z.any()).optional(),
    object: z.enum(["mandate"]),
    onBehalfOf: z.string().optional(),
    paymentMethod: z.union([
      z.string(),
      z.lazy(() => Schemas$PaymentMethod.out),
    ]),
    paymentMethodDetails: Schemas$MandatePaymentMethodDetails.out,
    singleUse: Schemas$MandateSingleUse.out.optional(),
    status: z.enum(["active", "inactive", "pending"]),
    type: z.enum(["multi_use", "single_use"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customerAcceptance: "customer_acceptance",
      id: "id",
      livemode: "livemode",
      multiUse: "multi_use",
      object: "object",
      onBehalfOf: "on_behalf_of",
      paymentMethod: "payment_method",
      paymentMethodDetails: "payment_method_details",
      singleUse: "single_use",
      status: "status",
      type: "type",
    });
  });

export const Schemas$Mandate = {
  in: SchemaIn$Mandate,
  out: SchemaOut$Mandate,
};
